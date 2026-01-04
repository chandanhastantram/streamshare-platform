import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Comment from '@/lib/models/Comment';
import { requireAuth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const contentId = searchParams.get('contentId');
    const contentType = searchParams.get('contentType');

    if (!contentId || !contentType) {
      return NextResponse.json(
        { error: 'contentId and contentType are required' },
        { status: 400 }
      );
    }

    // Get comments
    const comments = await Comment.find({
      contentId,
      contentType,
      parentComment: null, // Only top-level comments
    })
      .populate('user', 'username profileImage')
      .sort({ createdAt: -1 })
      .lean();

    // Get replies for each comment
    const commentsWithReplies = await Promise.all(
      comments.map(async (comment) => {
        const replies = await Comment.find({ parentComment: comment._id })
          .populate('user', 'username profileImage')
          .sort({ createdAt: 1 })
          .lean();
        return { ...comment, replies };
      })
    );

    return NextResponse.json({ comments: commentsWithReplies });
  } catch (error: any) {
    console.error('Get comments error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    // Require authentication
    const user = requireAuth(request);

    const body = await request.json();
    const { content, contentId, contentType, parentComment } = body;

    if (!content || !contentId || !contentType) {
      return NextResponse.json(
        { error: 'content, contentId, and contentType are required' },
        { status: 400 }
      );
    }

    // Create comment
    const comment = await Comment.create({
      content,
      user: user.userId,
      contentId,
      contentType,
      parentComment: parentComment || null,
    });

    // Populate user data
    await comment.populate('user', 'username profileImage');

    return NextResponse.json(
      {
        message: 'Comment created successfully',
        comment,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Create comment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
