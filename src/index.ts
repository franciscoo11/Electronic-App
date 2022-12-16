import 'dotenv/config';
import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './database/config';
import appRoutes from './routes';


const app: Application = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false} ));
app.use(express.json());

app.use('/api/v1', appRoutes);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_req, res, _next) => {
  res.status(404).json('Not Found');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error:Error, _req: Request, res: Response, _next: NextFunction) => {
  if(error.name === 'CastError'){
    res.status(400).json('Id used is not correct');
  } else {
    res.status(500).json('Something goes wrong, try again later.');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running ON ${PORT}`);
});
