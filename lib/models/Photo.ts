import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPhoto extends Document {
  title: string;
  description: string;
  photoUrl: string;
  publicId: string;
  user: mongoose.Types.ObjectId;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PhotoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    photoUrl: {
      type: String,
      required: [true, 'Photo URL is required'],
    },
    publicId: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [{
      type: String,
      trim: true,
    }],
  },
  {
    timestamps: true,
  }
);

// Indexes for performance
PhotoSchema.index({ user: 1, createdAt: -1 });
PhotoSchema.index({ tags: 1 });
PhotoSchema.index({ createdAt: -1 });

const Photo: Model<IPhoto> = mongoose.models.Photo || mongoose.model<IPhoto>('Photo', PhotoSchema);

export default Photo;
