"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const config_1 = __importDefault(require("./db/config"));
const app = (0, express_1.default)();
//asd
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use(index_1.default);
config_1.default.sync({ force: true }).then(() => {
    app.listen(3001);
    console.log('Server running on port 3001');
}).catch((err) => {
    console.log('connection sync error: ' + err.message);
});
