"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(idusuario, nombre, apellido, correo, password) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = password;
        this.tipousuario = "usuario";
    }
}
exports.default = user;
