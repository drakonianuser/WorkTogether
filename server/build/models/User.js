"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(idusuario, nombre, apellido, correo, password,celular) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = password;
        this.tipousuario = "usuario";
        this.celular = celular;
    }
}
exports.default = user;
