import mongoose, { model, Schema } from 'mongoose';

const reviewSchema = new Schema({
  product: {
    ref:'Product',
    type: mongoose.Types.ObjectId,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
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
}, { timestamps: true, versionKey: false, } );

export default model('Review', reviewSchema);
