import mongoose, { Schema, Document } from 'mongoose';

export interface IBrand extends Document {
  name: string;
  logoUrl?: string;
  createdAt: Date;
}

const BrandSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  logoUrl: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Brand || mongoose.model<IBrand>('Brand', BrandSchema);