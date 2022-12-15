import mongoose, { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  products_id:[
    { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
  ],
  name:{
    type:String,
    required:true,
    unique: true,
  },
   
    
});

// productsSchema.set('toJSON', {
//   transform: (_document, returnedObject) => {
//     returnedObject.id = returnedObject._id;
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   }
// });

export default model('Products', categorySchema);