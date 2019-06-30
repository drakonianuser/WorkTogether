"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ComentariosController_1 = __importDefault(require("../controllers/ComentariosController"));
class ComentariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/:id', ComentariosController_1.default.list);
        this.router.post('/api/', ComentariosController_1.default.create);
        this.router.put('/api/:id', ComentariosController_1.default.update);
        this.router.delete('/api/:id', ComentariosController_1.default.Delete);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
