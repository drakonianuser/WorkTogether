"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProyectRoutes {
    constructor() {
        this.router = express_1.Router();
    }
    config() {
        this.router.get('/proyects', (req, res) => res.send("hello"));
    }
}
const proyectRoutes = new ProyectRoutes();
exports.default = proyectRoutes.router;
