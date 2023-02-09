import { Table, Model,Column , DataType, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';



@Table({
    timestamps: false
})
export class Student extends Model{
    @Column({
        type: DataType.STRING
    })
    name!: string

    @Column({
        type: DataType.STRING
    })
    address!: string

    
};