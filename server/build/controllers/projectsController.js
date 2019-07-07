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
class ProjectsController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield database_1.default.query('SELECT * FROM proyectos');
            const detalleprojects = yield database_1.default.query('SELECT * FROM detalleproyecto');
            res.json({ "proyect": projects, "detalle": detalleprojects });
        });
    }
    /**
     * oneproject
    */
    oneproject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const detalle = yield database_1.default.query('SELECT * FROM detalleproyecto WHERE iddetalleproyecto = ?', [id]);
            const proyecto = yield database_1.default.query('SELECT * FROM proyectos WHERE detalleproyecto_iddetalleproyecto =?', [id]);
            if (proyecto.length > 0) {
                return res.json({ 'proyecto': proyecto, 'detalle': detalle });
            }
            res.status(404).json({ text: "El proyecto no existe" });
        });  
    }
    /**
     * create
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO proyectos set ?', [req.body]);
            res.send("project create");
        });
    }
    /**
     * update
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE proyectos SET ? WHERE id = ?'[req.body, id]);
            res.json({ message: "El proyecto fue actualizado" });
        });
    }
}
const projectscontroller = new ProjectsController();
exports.default = projectscontroller;
