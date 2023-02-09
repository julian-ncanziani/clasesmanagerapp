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
const express_1 = require("express");
const student_1 = require("../models/student");
const studentRouter = (0, express_1.Router)();
studentRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, address, UserId } = req.body;
    try {
        const newStudent = yield student_1.Student.create({ name, address, UserId });
        res.status(200).json(newStudent);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
studentRouter.get('/all', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.Student.findAll();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
studentRouter.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { UserId } = req.body;
    try {
        const students = yield student_1.Student.findAll({ where: { UserId } });
        res.status(200).json(students);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
exports.default = studentRouter;
