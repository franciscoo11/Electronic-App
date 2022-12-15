import { Response } from 'express';

const handlerHttpError = (res: Response, error: Error) => {
  console.log('Error server', error);
  res.status(500);
  res.send({ error: 'ERROR' });
};
  
const handlerRespError = (res: Response, message: string, code: number) => {
  console.log('Error request', message);
  res.status(code);
  res.send({ error: message });
};
  