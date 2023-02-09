import { Router, Request, Response } from "express";
import { Class } from "../models/class";

const classRouter = Router();

classRouter.post('',async (req: Request, res: Response)=>{
    let { price, UserId, StudentId } = req.body;
    let date: Date = req.body.date; // enviar como "YYYY-MM-DD HH:mm:ss GMT"

    try {
        const newClass =await Class.create({price, UserId, StudentId, date});
        res.status(200).json(newClass);
    } catch (error) {
        res.status(400).json(error);
    }
});

classRouter.get('/:userId',async (req: Request, res: Response)=>{
    let UserId :number  = parseInt(req.params.userId);
    try {
        const classByUser = await Class.findAll({where: {UserId}});
        res.status(200).json(classByUser);
    } catch (error) {
        res.status(400).json(error);
    };
});

export default classRouter;