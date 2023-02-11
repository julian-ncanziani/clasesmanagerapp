"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classController_1 = require("../controllers/classController");
const classRouter = (0, express_1.Router)();
//ver como definir multiples variables en una sola linea asignando el tipo
classRouter.post('', classController_1.ClassController.postNewClass);
classRouter.get('/:userId', classController_1.ClassController.getClassesByUserId);
exports.default = classRouter;
