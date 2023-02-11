import { Request, Response, Router } from 'express';
import {User} from '../models/user';
import { UserController } from '../controllers/userController';

const userRouter = Router();

userRouter.get('', UserController.getAllUsers);

userRouter.post('', UserController.postUser);

export default userRouter;