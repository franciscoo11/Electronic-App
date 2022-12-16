import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import { handlerHttpError, handlerRespError } from '../helpers/handlerError';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name, lastName } = req.body;
    if(!email || !password || !name || !lastName) return handlerRespError(res,'Fields email, password, name, lastName are required',400);

    const createUser: IUser = new User({
      ...req.body,
      email,
      lastName,
      name,
      password
    });
    createUser.password = await createUser.encryptPassword(createUser.password);

    const addNewUser = await createUser.save();
    return res.status(201).json(addNewUser);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_CREATE_USER');
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const allUsers = await User.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_GET_ALLUSERS');
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res,'Id was not sended',400);

    const userById = await User.findById(id);
    return res.status(200).json(userById); 
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_GET_USER');
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res,'Id was not sended',400);

    const { email, password, name, lastName } = req.body;
    const userById = await User.findByIdAndUpdate({ _id: id }, { ...req.body, email, password, name, lastName }, { new: true} );

    if (userById){
      userById.password = await userById.encryptPassword(userById.password);
      await userById.save();
    }
    res.status(200).json(userById);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_UPDATE_USER');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if(!id) return handlerRespError(res,'Id was not sended',400);

    const saveUserToReturn = await User.findById(id);
    await User.findByIdAndDelete({ _id: id });

    return res.status(200).json(saveUserToReturn);
  } catch (error) {
    handlerHttpError(res,'ERROR_IN_DELETE_USER');
  }
};
