import mongoose, { model, Schema } from 'mongoose';

const userSchema = new Schema({
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

});
export default model('WishList', userSchema);