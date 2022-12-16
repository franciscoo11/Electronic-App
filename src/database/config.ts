import mongoose, { ConnectOptions } from 'mongoose';

const DB_URI = <string>process.env.MONGO_URI;

mongoose.set('strictQuery', false);

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then(() => {
  console.log('DB connected');
}).catch(err => {
  console.error(err);
  process.exit(0);
});
