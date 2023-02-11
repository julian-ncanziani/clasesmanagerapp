import { Router, Request, Response } from 'express';
import { Student } from '../models/student';
import { StudentController } from '../controllers/studentController';
const studentRouter = Router();

studentRouter.post('', StudentController.postStudent);

studentRouter.get('', StudentController.getAllStudents);

studentRouter.get('/:id', StudentController.getStudentsByUserId);

export default studentRouter;