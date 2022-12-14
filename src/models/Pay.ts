import mongoose, { model, Schema } from 'mongoose';

const userSchema = new Schema({
  amount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'Post',
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: 'User',
  },
  doReview:{
    type:Boolean,
    default: false,
  },
  buyer: {
    ref: 'User',
    type: mongoose.Types.ObjectId,
  },
  status:{
    type:String,
    enum:['pending','approved','rejected'],
    default:'pending',
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
      quantity: Number,
      required: false,
    },
  ],

});

export default model('Pay', userSchema);
