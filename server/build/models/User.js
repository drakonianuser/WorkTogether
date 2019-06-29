"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class user {
    constructor(idusuario, nombre, apellido, correo, contraseña) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
        this.tipousuario = "usuario";
    }
}
exports.default = user;
