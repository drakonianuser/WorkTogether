"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportesControllers_1 = __importDefault(require("../controllers/reportesControllers"));
class ReportesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/', reportesControllers_1.default.list);
        this.router.get('/api/:id', reportesControllers_1.default.one);
        this.router.post('/api/', reportesControllers_1.default.create);
        this.router.put('/api/:id', reportesControllers_1.default.update);
        this.router.delete('/api/:id', reportesControllers_1.default.Delete);
    }
}
const reportesRoutes = new ReportesRoutes();
exports.default = reportesRoutes.router;
