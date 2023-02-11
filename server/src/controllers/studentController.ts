import express from 'express';

import { Student } from '../models/student';

export class StudentController{
    static async postStudent(req: express.Request, res: express.Response){
            let { name, address, UserId } = req.body;
        try {
            const newStudent = await Student.create({
                name, 
                address, 
                UserId
            });
            res.status(200).json(newStudent);
        } catch (error) {
            res.status(400).json(error);
        }
    };

    static async getAllStudents(_req: express.Request, res: express.Response){
        try {
            const students = await Student.findAll();
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json(error);
        }
    };

    static async getStudentsByUserId(req: express.Request, res: express.Response){
            let UserId = req.params.id;
        try {
            const students = await Student.findAll({where: {UserId}});
            res.status(200).json(students);
        } catch (error) {
            res.status(400).json(error);
        }
    };
};