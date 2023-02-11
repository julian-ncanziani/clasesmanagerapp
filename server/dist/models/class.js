"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Class = class Class extends sequelize_typescript_1.Model {
    /**
     * Recibe la duracion de la clase en minutos y setea el tiempo cuando la clase termina
     * en forma de fecha.
     * Usa los valores guardados en la base de datos de los parametros date y duration
     */
    setEndClass() {
        this.endClass = new Date(this.date.getTime() + ((this.duration) * 60 * 1000) - 1000);
    }
    ;
    /**
     * Setea el total a partir de los datos del precio por hora y la (duracion dada en minutos) de la clase
     */
    setTotal() {
        this.total = this.duration * (this.hourPrice / 60);
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Class.prototype, "hourPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false
    }),
    __metadata("design:type", Date)
], Class.prototype, "date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Class.prototype, "duration", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", Date)
], Class.prototype, "endClass", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('done', 'suspend')
    }),
    __metadata("design:type", Object)
], Class.prototype, "classStatus", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('done', 'canceled', 'onHold'),
        defaultValue: 'onHold'
    }),
    __metadata("design:type", Object)
], Class.prototype, "payment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT
    }),
    __metadata("design:type", Number)
], Class.prototype, "total", void 0);
Class = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false
    })
], Class);
exports.Class = Class;
;
