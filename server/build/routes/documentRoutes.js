"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentControllers_1 = __importDefault(require("../controllers/documentControllers"));
class DocumentRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    /**
     *config
     */
    config() {
        this.router.get('/api/:idproyecto', documentControllers_1.default.list);
        this.router.get('/api/:idproyecto/:idDocumento', documentControllers_1.default.onedocument);
        this.router.post('/api/:id', documentControllers_1.default.Create);
        this.router.put('/api/:iddocumentacion', documentControllers_1.default.update);
    }
}
const documentRoutes = new DocumentRoutes();
exports.default = documentRoutes.router;
