"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const studentRouter = (0, express_1.Router)();
studentRouter.post('', studentController_1.StudentController.postStudent);
studentRouter.get('', studentController_1.StudentController.getAllStudents);
studentRouter.get('/:id', studentController_1.StudentController.getStudentsByUserId);
exports.default = studentRouter;
