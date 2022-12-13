import mongoose, { ConnectOptions } from 'mongoose';

const DB_URI = <string>process.env.MONGO_URI;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB connected');
});

connection.on('error', err => {
  console.error(err);
  process.exit(0);
});
