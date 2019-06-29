"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasController_1 = __importDefault(require("../controllers/categoriasController"));
class CategoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/categorias', categoriasController_1.default.list);
        this.router.get('/api/categorias/:id', categoriasController_1.default.one);
        this.router.post('/api/categorias', categoriasController_1.default.create);
        this.router.put('/api/categorias/:id', categoriasController_1.default.update);
        this.router.delete('/api/categorias/:id', categoriasController_1.default.Delete);
    }
}
const categoriaRoutes = new CategoriaRoutes();
exports.default = categoriaRoutes.router;
