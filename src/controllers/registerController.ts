import { Request, Response } from 'express';
import User from '../models/User';

export const userRegister = async (req: Request, res: Response) => {
  const { email, password, name, lastName } = req.body;
  User.create({
    email,
    lastName,
    name,
    password
  }).then(user => res.status(201).json(user))
    .catch(() => res.status(400).json({ errors: 'Check fields in the body and try again.'}));
};