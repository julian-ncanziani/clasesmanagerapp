import { Router } from 'express';
import { User } from '../models/user';

const userRouter = Router();

userRouter.get('', async (_req, res)=>{
    
   try {
    const users = await User.findAll();
    res.status(200).json(users);
   } catch (error) {
    res.status(400).json(error);
   }
});

userRouter.post('', async (req, res)=>{
    let { name, email} = req.body;
    try {
        const newUser = await User.create({name, email}); 
        res.status(200).json({msg: 'User Created', ...newUser});
    } catch (error) {
        res.status(400).json(error);
    }
});

export default userRouter;