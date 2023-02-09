import { Sequelize } from "sequelize-typescript";
//models
import { User } from '../models/user';
import { Student } from '../models/student';
import { Class } from '../models/class';



const connection = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    host: 'localhost',
    password: 'albase123',
    database: 'clasesmanagerapp',
    logging: false,
    models: [Student, User, Class]
});

Class.belongsTo(User);
User.hasMany(Class);

Student.hasMany(Class);
Class.belongsTo(Student);

User.hasMany(Student)
Student.belongsTo(User);

export default connection;
