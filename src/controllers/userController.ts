import { NextFunction, Request, Response } from 'express';
import User, { IUser } from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  const { email, password, name, lastName } = req.body;
  if(!email || !password || !name || !lastName) return res.status(400).json({ message: 'Fields are required { email, name, lastName, password }'});
  const createUser: IUser = new User({
    ...req.body,
    email,
    lastName,
    name,
    password
  });
  createUser.password = await createUser.encryptPassword(createUser.password);
  const addNewUser = await createUser.save();
  return addNewUser ? res.status(201).json(addNewUser) : res.status(400).json({ message: 'Check fields in the body and try again.'});
};

export const getUsers = async (_req: Request, res: Response) => {
  const allUsers = await User.find();

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
    const userById = await User.findByIdAndUpdate({ _id: id }, { ...req.body, email, password, name, lastName }, { new: true} );
    if (userById){
      userById.password = await userById?.encryptPassword(userById.password);
      await userById.save();
    }
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
