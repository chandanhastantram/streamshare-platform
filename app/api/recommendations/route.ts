import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Video from '@/lib/models/Video';
import Photo from '@/lib/models/Photo';
import Like from '@/lib/models/Like';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');

    // Get user if authenticated
    let userId: string | null = null;
    try {
      const user = getUserFromRequest(request);
      if (user) userId = user.userId;
    } catch (error) {
      // User not authenticated
    }

    let recommendedContent: any[] = [];

    if (userId) {
      // Get user's liked content
      const userLikes = await Like.find({ user: userId }).limit(20).lean();
      const likedVideoIds = userLikes
        .filter((like) => like.contentType === 'video')
        .map((like) => like.contentId);

      // Get tags from liked videos
      const likedVideos = await Video.find({
        _id: { $in: likedVideoIds },
      }).select('tags');
      
      const tags = [...new Set(likedVideos.flatMap((v) => v.tags))];

      // Get recommended videos based on tags
      if (tags.length > 0) {
        const recommendedVideos = await Video.find({
          tags: { $in: tags },
          _id: { $nin: likedVideoIds },
        })
          .populate('user', 'username profileImage')
          .sort({ views: -1 })
          .limit(Math.floor(limit / 2))
          .lean();

        recommendedContent.push(
          ...recommendedVideos.map((v) => ({ ...v, type: 'video' }))
        );
      }

      // Get recommended photos
      const recommendedPhotos = await Photo.find({
        tags: { $in: tags },
      })
        .populate('user', 'username profileImage')
        .sort({ createdAt: -1 })
        .limit(Math.floor(limit / 2))
        .lean();

      recommendedContent.push(
        ...recommendedPhotos.map((p) => ({ ...p, type: 'photo' }))
      );
    }

    // If not enough recommendations, add popular content
    if (recommendedContent.length < limit) {
      const remaining = limit - recommendedContent.length;
      
      const popularVideos = await Video.find()
        .populate('user', 'username profileImage')
        .sort({ views: -1 })
        .limit(remaining)
        .lean();

      recommendedContent.push(
        ...popularVideos.map((v) => ({ ...v, type: 'video' }))
      );
    }

    // Shuffle recommendations
    recommendedContent.sort(() => Math.random() - 0.5);

    return NextResponse.json({
      recommendations: recommendedContent.slice(0, limit),
    });
  } catch (error: any) {
    console.error('Get recommendations error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
