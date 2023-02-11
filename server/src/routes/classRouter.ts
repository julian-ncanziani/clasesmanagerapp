import { Router, Request, Response } from "express";
import { Class } from "../models/class";
import { ClassController } from "../controllers/classController";
const classRouter = Router();


//ver como definir multiples variables en una sola linea asignando el tipo
classRouter.post('', ClassController.postNewClass);

classRouter.get('/:userId', ClassController.getClassesByUserId);

export default classRouter;