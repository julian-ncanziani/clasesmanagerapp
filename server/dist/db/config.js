"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
//models
const user_1 = require("../models/user");
const student_1 = require("../models/student");
const class_1 = require("../models/class");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    username: 'root',
    host: 'localhost',
    password: 'albase123',
    database: 'clasesmanagerapp',
    logging: false,
    models: [student_1.Student, user_1.User, class_1.Class]
});
class_1.Class.belongsTo(user_1.User);
user_1.User.hasMany(class_1.Class);
student_1.Student.hasMany(class_1.Class);
class_1.Class.belongsTo(student_1.Student);
user_1.User.hasMany(student_1.Student);
student_1.Student.belongsTo(user_1.User);
exports.default = connection;
