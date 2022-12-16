import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';

export const register = async (req: Request, res: Response) => {
  try {
    const findUserExist = await User.findOne({ email: req.body.email });
    if (findUserExist) return handlerRespError(res, 'USER_ALREADY_EXIST', 401);

    
  
    const user: IUser = new User({
      email: req.body.email,
      name: req.body.name,
      lastName: req.body.lastName,
      password: req.body.password,
      avatar: req.body.avatar
    });
    user.password = await user.encryptPassword(user.password);
    if(req.body.email === 'admin@electronicapp.com.ar') user.role = 'admin';

    const addUser = await user.save();
    return res.status(201).json(addUser);
  } catch (error) {
    handlerHttpError(res,error);
  }
  
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const login = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) return handlerRespError(res, 'USER_NOT_FOUND', 404);

    const checkPassword = await user.comparePassword(req.body.password);
    if(!checkPassword) return handlerRespError(res, 'INVALID_PASSWORD', 404);
  
    const token: string = jwt.sign({_id: user._id, role: user.role}, <string>process.env.JWT_SECRET, { 
      expiresIn: 60 * 60 * 24
    });
  
    return res.status(200).json({ user, token });
  } catch (error) {
    handlerHttpError(res,error);
  }
 
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId, { password : 0, _v: 0});
  if(!user) return res.status(404).json('No user was found');
  res.json(user); 
};