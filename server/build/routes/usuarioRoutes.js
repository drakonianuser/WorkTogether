"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = __importDefault(require("../controllers/usuarioController"));
class UsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/', usuarioController_1.default.list);
        this.router.get('/api/:id', usuarioController_1.default.oneuser);
        this.router.get('/api/:correo/:id', usuarioController_1.default.Userxcoreo);
        this.router.post('/api/', usuarioController_1.default.create);
        this.router.put('/api/:id', usuarioController_1.default.update);
        this.router.delete('/api/:id', usuarioController_1.default.Delete);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
