import mongoose, { model, Schema, Document, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

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
}, { timestamps: true, versionKey: false, } );

userSchema.methods.encryptPassword = async (password:string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password:string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

// userSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject._id;
//     delete returnedObject.__v;
//     // delete returnedObject.password;
//   }
// });

export default model<IUser>('User', userSchema);
