import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Video from '@/lib/models/Video';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const tag = searchParams.get('tag');
    const userId = searchParams.get('userId');
    const sort = searchParams.get('sort') || 'recent';

    const skip = (page - 1) * limit;

    // Build query
    const query: any = {};
    if (tag) query.tags = tag;
    if (userId) query.user = userId;

    // Build sort
    let sortQuery: any = { createdAt: -1 }; // Default: recent
    if (sort === 'popular') sortQuery = { views: -1 };
    if (sort === 'oldest') sortQuery = { createdAt: 1 };

    // Get videos
    const videos = await Video.find(query)
      .populate('user', 'username profileImage')
      .sort(sortQuery)
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count
    const total = await Video.countDocuments(query);

    return NextResponse.json({
      videos,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('Get videos error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
