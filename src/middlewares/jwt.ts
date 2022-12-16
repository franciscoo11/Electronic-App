import { Request, Response, NextFunction} from 'express';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';
import { verifyToken } from '../helpers/handlerJwt';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      const token = req.headers.authorization.split(' ')[1];
      if(!token) return handlerRespError(res,'ACCESS_DENIED', 409);
      const payload = await verifyToken(token);
      if(!payload?._id) return handlerRespError(res,'NOT_PERMISSION', 409);
      next();
    } catch (err) {
      handlerHttpError(res,err);
    }
  }

};

export const privateRoute = async (req: Request, res: Response, next: NextFunction) => {
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = await verifyToken(token);
      return decodedToken && next();
    } catch (error) {
      return handlerRespError(res,'Wrong credentials, not authorized', 401);
    }
  }
};

export const adminRoute = async (req: Request, res: Response, next: NextFunction) => {
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await verifyToken(token);

    if(decodedToken?.role === 'admin') return next();
  }
  return handlerRespError(res,'Wrong credentials, not authorized', 401);
};