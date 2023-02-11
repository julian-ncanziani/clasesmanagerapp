"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_1 = require("../models/student");
class StudentController {
    static postStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, address, UserId } = req.body;
            try {
                const newStudent = yield student_1.Student.create({
                    name,
                    address,
                    UserId
                });
                res.status(200).json(newStudent);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    ;
    static getAllStudents(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield student_1.Student.findAll();
                res.status(200).json(students);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    ;
    static getStudentsByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let UserId = req.params.id;
            try {
                const students = yield student_1.Student.findAll({ where: { UserId } });
                res.status(200).json(students);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    ;
}
exports.StudentController = StudentController;
;
