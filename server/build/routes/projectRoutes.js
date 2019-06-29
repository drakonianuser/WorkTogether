"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsController_1 = __importDefault(require("../controllers/projectsController"));
class ProjectRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/proyectos', projectsController_1.default.list);
        this.router.get('/api/proyectos/:id', projectsController_1.default.oneproject);
        this.router.post('/api/proyectos', projectsController_1.default.create);
        this.router.put('/api/proyectos/:id', projectsController_1.default.update);
    }
}
const projectRoutes = new ProjectRoutes();
exports.default = projectRoutes.router;
