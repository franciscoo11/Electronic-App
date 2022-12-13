import { model, Schema } from 'mongoose';

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
  lastName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  avatar: {
    type: String,
    required: false
  }
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  }
});

export default model('User', userSchema);
