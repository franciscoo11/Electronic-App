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
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
  ],
  category: [
    {
      ref: 'Category',
      type: mongoose.Types.ObjectId,
    },
  ],
  stock: {
    type: Number,
    required: true
  }
}, { timestamps: true, versionKey: false, strictPopulate: false, autopopulate: true });

// productsSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   }
// });

// eslint-disable-next-line @typescript-eslint/no-var-requires
productSchema.plugin(require('mongoose-autopopulate'));

export default model('Product', productSchema);
