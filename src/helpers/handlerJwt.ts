import jwt from 'jsonwebtoken';

interface IPayload {
  _id: string;
  role: string;
  iat: number;
  exp: number;
}

export const verifyToken = async (token: string) => {
  try {
    return await jwt.verify(token, <string>process.env.JWT_SECRET) as IPayload;
  } catch (err) {
    err;
  }
};

export const decodeJwtSign = (token:string) => {
  return jwt.decode(token, { complete:true, json: true });
};