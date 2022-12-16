import { Response } from 'express';

export const handlerHttpError = (res: Response, error: Error | unknown) => {
  console.log('Error server origin:', error);
  res.status(500);
  res.json({ error: 'Something goes wrong, try again later' });
};
  
export const handlerRespError = (res: Response, message: string, code: number) => {
  console.log('Error request', message);
  res.status(code);
  res.json({ error: message });
};
