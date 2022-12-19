import { Request, Response } from 'express';
import { handlerHttpError } from '../helpers/handlerError';

export const getLoginGoogle = async (_req: Request, res: Response) => {
  try {
    
    res.status(200).json('holas');
  } catch (error) {
    handlerHttpError(res,'ERROR_GET_LOGIN_GOOGLE');  
  }
};

