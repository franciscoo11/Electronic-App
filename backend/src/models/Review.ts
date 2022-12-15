import mongoose, { model, Schema } from 'mongoose';

const reviewSchema = new Schema({
  product: {
    ref:'products',
    type: mongoose.Types.ObjectId,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'users',
    },
  ],
  punctuation: {
    type: Number,
    required: true
  },
  opinion: {
    type: String,
    required: false
  }
}, { timestamps: true} );

export default model('Review', reviewSchema);
