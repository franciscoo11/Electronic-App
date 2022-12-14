import mongoose, { model, Schema, Document, Types } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IReview } from '../interfaces/Review';

interface ICart {
  quantity: number
}

export interface IUser extends Document {
  email:string;
  password:string;
  name:string;
  lastName:string;
  avatar?:string;
  role?:string;
  cart?:Types.DocumentArray<ICart>
  reviews?:Types.DocumentArray<IReview>
  encryptPassword(password:string): Promise<string>;
  comparePassword(password:string): Promise<boolean>;
}

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  cart: [
    {
      ref: 'Product',
      type: mongoose.Types.ObjectId,
      quantity: Number,
    },
  ],
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  avatar: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  reviews: [{
    type: mongoose.Types.ObjectId,
    ref: 'Review'
  }]
}, { timestamps: true, versionKey: false, } );

userSchema.methods.encryptPassword = async (password:string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password:string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

// userSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject._id;
//     delete returnedObject.__v;
//     // delete returnedObject.password;
//   }
// });

export default model<IUser>('User', userSchema);
