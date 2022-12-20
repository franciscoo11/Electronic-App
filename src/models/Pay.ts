import mongoose, { model, Schema } from 'mongoose';

const paySchema = new Schema({
  amount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  doReview:{
    type:Boolean,
    default: false,
  },
  paymentId: {
    type: String
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
      stock: Number
    },
  ],

}, { timestamps: true,  versionKey: false });

export default model('Pay', paySchema);
