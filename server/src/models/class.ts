import { Table, Model,Column , DataType} from 'sequelize-typescript';
import { EnumType } from 'typescript';


@Table({
    timestamps: false
})
export class Class extends Model{
    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    hourPrice!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date!: Date;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    duration!: number;

    @Column({
        type: DataType.DATE,
    })
    endClass!: Date;

    @Column({
        type: DataType.ENUM('done', 'suspend')
    })
    classStatus!: EnumType;

    @Column({
        type: DataType.ENUM('done', 'canceled', 'onHold'),
        defaultValue: 'onHold'
    })
    payment!: EnumType;

    @Column({
        type: DataType.FLOAT
    })
    total!: number;

    /**
     * Recibe la duracion de la clase en minutos y setea el tiempo cuando la clase termina
     * en forma de fecha.
     * Usa los valores guardados en la base de datos de los parametros date y duration
     */
    setEndClass(): void{
        this.endClass = new Date(this.date.getTime() + ((this.duration) * 60 * 1000) - 1000);
    };

    /**
     * Setea el total a partir de los datos del precio por hora y la (duracion dada en minutos) de la clase 
     */
    setTotal():void{
        this.total = this.duration * (this.hourPrice / 60);
    }
};



