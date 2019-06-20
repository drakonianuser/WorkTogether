"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentificacionControllers_1 = __importDefault(require("../controllers/autentificacionControllers"));
class AutentificacionRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    /**
     *config
     */
    config() {
        this.router.post('/api/login', autentificacionControllers_1.default.Registro);
    }
}
const autentificacionRoutes = new AutentificacionRoutes();
exports.default = autentificacionRoutes.router;
