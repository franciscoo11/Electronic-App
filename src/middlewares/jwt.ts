import { Request, Response, NextFunction} from 'express';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';
import { verifyToken } from '../helpers/handlerJwt';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.headers.authorization) {
      return handlerRespError(res,'ACCESS_DENIED', 409);
    }
    const token = req.headers.authorization;
    const payload = await verifyToken(token);
    if(!payload?._id) return handlerRespError(res,'NOT_PERMISSION', 409);
    next();
  } catch (err) {
    handlerHttpError(res,err);
  }
};

export const privateRoute = async (req: Request, res: Response, next: NextFunction) => {
  if(req.headers.authorization){
    try {
      const token = req.headers.authorization;
      const decodedToken = await verifyToken(token);
      return decodedToken && next();
    } catch (error) {
      return res.status(401).json({message:'Wrong credentials, not authorized'});
    }
  }
};

export const adminRoute = async (req: Request, res: Response, next: NextFunction) => {
  if(req.headers.authorization){
    try {
      const token = req.headers.authorization;
      const decodedToken = await verifyToken(token);
      if(decodedToken?.role === 'admin') return next();
    } catch (error) {
      return res.status(401).json({message:'Wrong credentials, not authorized'});
    }
  }
};