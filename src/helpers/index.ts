import bcryptjs from 'bcryptjs';

export const hashPassword = async (password:string) => {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hashSync(password, salt);
};

export const comparePassword = async(password:string, hashpw: string) => {
  return bcryptjs.compareSync(password, hashpw);
};