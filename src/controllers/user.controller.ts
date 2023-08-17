import { Request, Response } from '../types/types'


export const getInfoUser = async (req: Request, res: Response) => {
  let user = req.user;
  res.status(200).json({ user });
};