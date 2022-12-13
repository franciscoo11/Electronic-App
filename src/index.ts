import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './database/config';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false} ));
app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.use((_req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running ON ${PORT}`);
});
