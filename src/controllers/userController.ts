import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import { hashPassword } from '../helpers/index';

export const createUser = async (req: Request, res: Response) => {
  const { email, password, name, lastName } = req.body;
  if(!email || !password || !name || !lastName) return res.status(400).json({ message: 'Fields are required { email, name, lastName, password }'});
  const hashedpw = hashPassword(password);
  const createUser = await User.create({
    email,
    lastName,
    name,
    password: hashedpw
  });

  return createUser ? res.status(201).json(createUser) : res.status(400).json({ message: 'Check fields in the body and try again.'});
};

export const getUsers = async (_req: Request, res: Response) => {
  const allUsers = await User.find({});

  return allUsers.length ? res.status(200).json(allUsers) : res.status(404).json({ message: 'Users are empty.'});
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userById = await User.findById(id);

    return userById ? res.status(201).json(userById) : res.status(404).json({ message: 'Users are empty.'});
  } catch (error) {
    return next(error);
  }
  
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { email, password, name, lastName } = req.body;
    const hashedpw = hashPassword(password);
    const userById = await User.findByIdAndUpdate({ _id: id }, { ...req.body, email, password: hashedpw, name, lastName }, { new: true} );
    return userById ? res.status(200).json(userById) : res.status(400).json({ message: 'Id is not correct, check and try again'});
  } catch (error) {
    return next(error);
  }
  
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const saveUserToReturn = await User.findById(id);
    const removeUserById = await User.deleteOne({ _id: id });

    return removeUserById.acknowledged ? res.status(200).json(saveUserToReturn) : res.status(400).json({ message: 'Id is not correct, check and try again'});
  } catch (error) {
    return next(error);
  }
  
};