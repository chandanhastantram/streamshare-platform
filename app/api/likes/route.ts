import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Like from '@/lib/models/Like';
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

    // Get like count
    const likeCount = await Like.countDocuments({ contentId, contentType });

    // Check if user liked (if authenticated)
    let userLiked = false;
    try {
      const user = requireAuth(request);
      const like = await Like.findOne({
        user: user.userId,
        contentId,
        contentType,
      });
      userLiked = !!like;
    } catch (error) {
      // User not authenticated, userLiked remains false
    }

    return NextResponse.json({
      likeCount,
      userLiked,
    });
  } catch (error: any) {
    console.error('Get likes error:', error);
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
    const { contentId, contentType } = body;

    if (!contentId || !contentType) {
      return NextResponse.json(
        { error: 'contentId and contentType are required' },
        { status: 400 }
      );
    }

    // Check if already liked
    const existingLike = await Like.findOne({
      user: user.userId,
      contentId,
      contentType,
    });

    if (existingLike) {
      // Unlike
      await Like.deleteOne({ _id: existingLike._id });
      const likeCount = await Like.countDocuments({ contentId, contentType });
      return NextResponse.json({
        message: 'Unliked successfully',
        liked: false,
        likeCount,
      });
    } else {
      // Like
      await Like.create({
        user: user.userId,
        contentId,
        contentType,
      });
      const likeCount = await Like.countDocuments({ contentId, contentType });
      return NextResponse.json({
        message: 'Liked successfully',
        liked: true,
        likeCount,
      });
    }
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    console.error('Toggle like error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
