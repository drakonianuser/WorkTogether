"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalleProyectoController_1 = __importDefault(require("../controllers/detalleProyectoController"));
class DetalleProyectoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/detallePro', detalleProyectoController_1.default.list);
        this.router.get('/api/detallePro/:id', detalleProyectoController_1.default.one);
        this.router.post('/api/detallePro', detalleProyectoController_1.default.create);
        this.router.put('/api/detallePro/:id', detalleProyectoController_1.default.update);
    }
}
const detalleProyectoRoutes = new DetalleProyectoRoutes();
exports.default = detalleProyectoRoutes.router;
