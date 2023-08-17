import jwt, { Secret } from 'jsonwebtoken';
import process from 'process'
import { Request, Response } from '../types/types'
import UserModel from '../models/user.models'
import bcrypt from 'bcryptjs'

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email address is already registered' });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ name, email, password: hashedPassword });

    await newUser.save();

    const newUserId = newUser._id;

    res.status(201).json({ message: 'User registered successfully', id: newUserId, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

export const signin = async (req: Request, res: Response) => {

  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user || !user.isPasswordCorrect(password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const secret: Secret = process.env.JWT_SECRET! 

    const token = jwt.sign({ id: user._id, email: user.email }, secret, { expiresIn: '1h' });
    res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });
    res.status(200).json({ email: user.email, token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = async (req: Request, res: Response) => {

  if (!req.cookies || !req.cookies.jwt) {
    return res.status(401).json({ message: "You are not connected" });
  }

  res.clearCookie('jwt');

  res.status(200).json({ message: "You are disconnected with success" });
};