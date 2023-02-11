import express from 'express';
import {User} from '../models/user';

export class UserController{
    static async getAllUsers(_req: express.Request, res: express.Response){
        const users = await User.findAll();
        res.json(users);
    }

    static async postUser(req: express.Request, res: express.Response){
        try {
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                
            });
            res.status(200).json(newUser);
        } catch (error) {
            res.status(400).json(error);
        }
    }
};


