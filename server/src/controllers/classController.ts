import express from 'express';
import { Class } from '../models/class';
import { Op } from 'sequelize';
/** devovler un string con la estructura: YYYY-MM-DD HH:mm:ss GMT
 * @property {number} year: debe venir como YYYY
 * @property {number} month:  MM
 * @property {number} day: DD
 * @property {number} hour: HH
 * @property {number} minits: mm
 * */  
interface dateConvert{
    year: number, 
    month: number, 
    day: number, 
    hour: number, 
    minits: number,
};

export class ClassController{

    static async postNewClass(req: express.Request, res: express.Response){
            let { hourPrice, UserId, StudentId, duration } = req.body;
            const date: dateConvert = req.body.date; 
        try {
            const [newClass, created] = await Class.findOrCreate({
                where:{
                    UserId,
                    date: {
                        [Op.between]: 
                        [new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:${date.minits}:00 GMT`),
                        new Date(new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:${date.minits}:00 GMT`).getTime() + (duration  * 60 * 1000) - 1000)]
                    }
                },
                defaults:{
                hourPrice,
                UserId, 
                StudentId, 
                duration,
                date: new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:${date.minits}:00 GMT`)}
                });
                newClass.setEndClass();
                newClass.setTotal();
                newClass.save();
                if(!created) throw({error: 'La clase no se creo porque el horario esta ocupado'});
                res.status(200).json({newClass, created});
        } catch (error) {
            res.status(400).json(error);
        }
    };

    static async getClassesByUserId(req: express.Request, res: express.Response){
            let UserId :number  = parseInt(req.params.userId);
        try {
            const classByUser = await Class.findAll({where: {UserId}});
            res.status(200).json(classByUser);
        } catch (error) {
            res.status(400).json(error);
        };
    }
    
};


