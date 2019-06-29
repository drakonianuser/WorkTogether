"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ReportesController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reporte = yield database_1.default.query('SELECT * FROM reportes');
            res.json(reporte);
        });
    }
    /**
     * one
    */
    one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const project = yield database_1.default.query('SELECT * FROM reportes WHERE idreportes = ?', [id]);
            if (project.length > 0) {
                return res.json(project[0]);
            }
            res.status(404).json({ text: "El reporte no existe" });
        });
    }
    /**
     * create
     * este metodo espara crear un nuevo reporte
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO reportes set ?', [req.body]);
            res.send("reporte create");
        });
    }
    /**
     * update
     * este metodo espara corregir alguna categoria
     * resive el identificador atrabes de la ruta y el json con el nombre de la categoria corregido
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE reporte SET ? WHERE idreporte = ?'[req.body, id]);
            res.json({ message: "El reporte fue actualizado" });
        });
    }
    /**
     * Delete
     * este metodo esta para eliminar un reporte.
     * este resive el id del reporte
     */
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from worktogether.reportes where idreporte =?', [id]);
        });
    }
}
const reportesController = new ReportesController();
exports.default = reportesController;
