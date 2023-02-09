import { Table, Model,Column , DataType, ForeignKey, HasMany, BelongsToMany } from 'sequelize-typescript';

/* interface classAttributes{
    price: number,
    date: Date,
    UserId: number,
    StudentId: number
}; */

@Table({
    timestamps: false
})
export class Class extends Model{
    @Column({
        type: DataType.FLOAT
    })
    price!: number;

    @Column({
        type: DataType.DATE
    })
    date!: Date;
};

