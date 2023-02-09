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
const class_1 = require("../models/class");
const classRouter = (0, express_1.Router)();
classRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { price, UserId, StudentId } = req.body;
    let date = req.body.date; // enviar como "YYYY-MM-DD HH:mm:ss GMT"
    try {
        const newClass = yield class_1.Class.create({ price, UserId, StudentId, date });
        res.status(200).json(newClass);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
classRouter.get('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let UserId = parseInt(req.params.userId);
    try {
        const classByUser = yield class_1.Class.findAll({ where: { UserId } });
        res.status(200).json(classByUser);
    }
    catch (error) {
        res.status(400).json(error);
    }
    ;
}));
exports.default = classRouter;
