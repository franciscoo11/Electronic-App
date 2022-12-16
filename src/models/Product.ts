import mongoose, { model, Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  reviews_id: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
  ],
  category: [
    {
      ref: 'Category',
      type: mongoose.Types.ObjectId,
    },
  ],
  inStock: {
    type: Number,
    required: true
  }
});

// productsSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   }
// });

export default model('Product', productSchema);
