import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';

interface IPayload {
  _id: string;
  iat: number;
  exp: number;
}

export const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json('Access denied');
  
    const payload = jwt.verify(token, <string>process.env.JWT_SECRET) as IPayload;
    if(!payload._id) handlerRespError(res,'NOT_PERMISSION', 409);
    req.userId = payload._id;
    next();
  } catch (err) {
    handlerHttpError(res,err);
  }
};