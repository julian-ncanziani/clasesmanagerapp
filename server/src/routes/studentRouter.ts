import { Router } from 'express';
import { Student } from '../models/student';

const studentRouter = Router();

studentRouter.post('', async (req, res)=>{
    let { name, address, UserId } = req.body;
    try {
        const newStudent = await Student.create({name, address, UserId});
        res.status(200).json(newStudent);
    } catch (error) {
        res.status(400).json(error);
    }
});

studentRouter.get('/all',async (_req, res)=>{
    try {
        const students = await Student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json(error);
    }
});

studentRouter.get('',async (req, res)=>{
    let {UserId} = req.body;
    try {
        const students = await Student.findAll({where: {UserId}});
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json(error);
    }
});

export default studentRouter;