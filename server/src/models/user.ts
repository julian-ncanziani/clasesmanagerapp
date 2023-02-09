
import { Table, Column, DataType, Model, HasMany, PrimaryKey, ForeignKey } from 'sequelize-typescript';


@Table({
    timestamps: false
})
export class User extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @Column({
        type: DataType.STRING
    })
    name!: string

    @Column({
        type: DataType.STRING
    })
    password!: string

    @Column({
        type: DataType.STRING
    })
    email!: string   

   
};


