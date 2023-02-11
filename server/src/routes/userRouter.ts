import {  Router } from 'express';

import { UserController } from '../controllers/userController';

const userRouter = Router();

userRouter.get('', UserController.getAllUsers);

userRouter.post('', UserController.postUser);

export default userRouter;