import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name:{
    type:String,
    required:true,
    unique: true,
  },
   
}, {
  timestamps: true
});

// productsSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   }
// });

export default model('Category', categorySchema);