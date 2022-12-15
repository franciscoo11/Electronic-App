import { Response } from 'express';

export const handlerHttpError = (res: Response, error: Error) => {
  console.log('Error server', error);
  res.status(500);
  res.send({ error: 'Something goes wrong, try again later' });
};
  
export const handlerRespError = (res: Response, message: string, code: number) => {
  console.log('Error request', message);
  res.status(code);
  res.send({ error: message });
};
