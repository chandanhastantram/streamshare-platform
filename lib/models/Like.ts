import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILike extends Document {
  user: mongoose.Types.ObjectId;
  contentId: mongoose.Types.ObjectId;
  contentType: 'video' | 'photo';
  createdAt: Date;
}

const LikeSchema: Schema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// Compound unique index to ensure one like per user per content
LikeSchema.index({ user: 1, contentId: 1, contentType: 1 }, { unique: true });
LikeSchema.index({ contentId: 1, contentType: 1 });

const Like: Model<ILike> = mongoose.models.Like || mongoose.model<ILike>('Like', LikeSchema);

export default Like;
