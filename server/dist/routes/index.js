"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//rutas
const userRouter_1 = __importDefault(require("./userRouter"));
const studentRouter_1 = __importDefault(require("./studentRouter"));
const classRouter_1 = __importDefault(require("./classRouter"));
const router = (0, express_1.Router)();
router.get('/', (_req, res) => {
    res.send('Server Ok');
});
router.use('/user', userRouter_1.default);
router.use('/student', studentRouter_1.default);
router.use('/class', classRouter_1.default);
exports.default = router;
