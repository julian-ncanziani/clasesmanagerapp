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
const user_1 = require("../models/user");
const userRouter = (0, express_1.Router)();
userRouter.get('', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
userRouter.post('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, email } = req.body;
    try {
        const newUser = yield user_1.User.create({ name, email });
        res.status(200).json(Object.assign({ msg: 'User Created' }, newUser));
    }
    catch (error) {
        res.status(400).json(error);
    }
}));
exports.default = userRouter;
