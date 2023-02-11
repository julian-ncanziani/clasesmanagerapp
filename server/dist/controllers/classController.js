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
exports.ClassController = void 0;
const class_1 = require("../models/class");
const sequelize_1 = require("sequelize");
;
class ClassController {
    static postNewClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { hourPrice, UserId, StudentId, duration } = req.body;
            const date = req.body.date;
            try {
                const [newClass, created] = yield class_1.Class.findOrCreate({
                    where: {
                        UserId,
                        date: {
                            [sequelize_1.Op.between]: [new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:${date.minits}:00 GMT`),
                                new Date(new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:${date.minits}:00 GMT`).getTime() + (duration * 60 * 1000) - 1000)]
                        }
                    },
                    defaults: {
                        hourPrice,
                        UserId,
                        StudentId,
                        duration,
                        date: new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:${date.minits}:00 GMT`)
                    }
                });
                newClass.setEndClass();
                newClass.setTotal();
                newClass.save();
                if (!created)
                    throw ({ error: 'La clase no se creo porque el horario esta ocupado' });
                res.status(200).json({ newClass, created });
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    ;
    static getClassesByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let UserId = parseInt(req.params.userId);
            try {
                const classByUser = yield class_1.Class.findAll({ where: { UserId } });
                res.status(200).json(classByUser);
            }
            catch (error) {
                res.status(400).json(error);
            }
            ;
        });
    }
}
exports.ClassController = ClassController;
;
