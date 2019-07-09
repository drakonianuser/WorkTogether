"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallePublicacionController_1 = __importDefault(require("../controllers/detallePublicacionController"));
class DetallePublicacionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {  
        this.router.get('/api/:idproyecto', detallePublicacionController_1.default.list);
        this.router.get('/api/:id/:id2', detallePublicacionController_1.default.onepublicacion);
        this.router.post('/api/:id', detallePublicacionController_1.default.create);
        this.router.put('/api/:id', detallePublicacionController_1.default.update);
    }
}  
const detallePublicacionRoutes = new DetallePublicacionRoutes();
exports.default = detallePublicacionRoutes.router; 
  