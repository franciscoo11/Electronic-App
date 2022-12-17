import mongoose, { model, Schema } from 'mongoose';

const wishListSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User',
  },
  products: [
    {
      _id: {
        ref: 'Product',
        type: mongoose.Types.ObjectId,
      },
      name: String,
      price: mongoose.Types.Decimal128,
      description: String,
      required: false,
    },
  ],

}, {
  timestamps: true, versionKey: false,
});
export default model('WishList', wishListSchema);