import express, { Request, Response } from "express";
import mongoose, { ConnectOptions } from 'mongoose';
import { authMiddleware } from '../middleware/auth.middleware';
import { signup, signin, logout } from "../controllers/auth.controller";
import { getInfoUser } from '../controllers/user.controller';
import { Router } from '../types/types';

const router: Router = express.Router();

// Welcome to my api
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my API.");
});

// Health
router.get("/health", () => {
  const uri = `mongodb+srv://${process.env.NAME_DB}:${process.env.PASSWORD_DB}@cluster0.bqizz.mongodb.net/test-db?retryWrites=true&w=majority`;

  mongoose.set('strictQuery', false);

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)

  mongoose.connection.on('connected', () => {
    console.log("MongoDB Connection Succeeded");
  });

  mongoose.connection.on('error', (err) => {
    console.log("Error in db connection: " + err);
  });
});

// Authentification
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

// User
router.get('/user', (req: Request, res: Response) => {
  authMiddleware(req, res, () => {
    getInfoUser(req, res);
  });
});

export default router;
