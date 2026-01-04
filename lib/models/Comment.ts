import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IComment extends Document {
  content: string;
  user: mongoose.Types.ObjectId;
  contentId: mongoose.Types.ObjectId;
  contentType: 'video' | 'photo';
  parentComment?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: [true, 'Comment content is required'],
      trim: true,
      maxlength: [1000, 'Comment cannot exceed 1000 characters'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    contentId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    contentType: {
      type: String,
      enum: ['video', 'photo'],
      required: true,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for performance
CommentSchema.index({ contentId: 1, contentType: 1, createdAt: -1 });
CommentSchema.index({ user: 1 });
CommentSchema.index({ parentComment: 1 });

const Comment: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;
