"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagenesController_1 = __importDefault(require("../controllers/imagenesController"));
class ImagenesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/', imagenesController_1.default.list);
        this.router.get('/api/d/:iddocument', imagenesController_1.default.oneproyectoImagens);
        this.router.get('/api/:idimagen', imagenesController_1.default.oneImagens);
        this.router.post('/api/', imagenesController_1.default.create);
        this.router.put('/api/:id', imagenesController_1.default.update);
        this.router.delete('/api/:id', imagenesController_1.default.Delete);
    }
}
const imagenesRoutes = new ImagenesRoutes();
exports.default = imagenesRoutes.router;
