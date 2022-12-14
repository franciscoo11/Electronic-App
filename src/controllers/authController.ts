import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const user: IUser = new User({
    email: req.body.email,
    name: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    avatar: req.body.avatar
  });
  user.password = await user.encryptPassword(user.password);

  const addUser = await user.save();

  const token: string = jwt.sign({_id: addUser._id}, <string>process.env.JWT_SECRET,  { 
    expiresIn: 60 * 60 * 24
  });

  return res.header('auth-token', token).json(addUser);
};

export const login = async (req: Request, res: Response) => {
  const user = await User.findOne({ email: req.body.email });
  if(!user) return res.status(400).json('Wrong credentials');
  const checkPassword = await user.comparePassword(req.body.password);
  if(!checkPassword) return res.status(400).json('Invalid password');

  const token: string = jwt.sign({_id: user._id}, <string>process.env.JWT_SECRET, { 
    expiresIn: 60 * 60 * 24
  });

  return res.header('auth-token', token).json(user);
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId, { password : 0, _v: 0});
  if(!user) return res.status(404).json('No user was found');
  res.json(user); 
};