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
    }
    /**
     *config
     */
    config() {
        this.router.get('/api/document/:idproyeto', documentControllers_1.default.list);
        this.router.get('/api/document/:idproyecto/:idDocumento', documentControllers_1.default.onedocument);
        this.router.post('/api/document/:idproyecto', documentControllers_1.default.Create);
        this.router.put('/api/document/:idproyecto/:idDocument', documentControllers_1.default.update);
    }
}
const documentRoutes = new DocumentRoutes();
exports.default = documentRoutes.router;
