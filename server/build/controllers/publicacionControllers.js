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
class PublicacionController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idproyecto } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicaciones WHERE proyectos_idproyectos = ?', [idproyecto]);
            const detalle = yield database_1.default.query('select * from detallepublicacio');
            res.json({ "publicacion": publicaciones, "detalle": detalle });
        });
    }
    /**
     * oneproject
    */
    onepublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { detalle } = req.params;
            const { idproyecto } = req.params;
            const project = yield database_1.default.query('SELECT * FROM publicaciones WHERE idpublicacion , proyectos_idproyectos values ?', [detalle, idproyecto]);
            if (project.length > 0) {
                return res.json(project[0]);
            }
            res.status(404).json({ text: "El proyecto no existe" });
        });
    }
    /**
     * create
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estatus = yield database_1.default.query('INSERT INTO publicaciones set ?', [req.body]);
            res.send("project create");
            res.json(estatus);
        });
    }
    /**
     * update
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE publicaciones SET ? WHERE id = ?', [req.body, id]);
            res.json({ message: "El proyecto fue actualizado" });
        });
    }
    /**
     * Delete
     */
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpublicaciones } = req.params;
            yield database_1.default.query('delete  from worktogether.publicaciones where idpublicaciones = ?', [parseInt(idpublicaciones)]);
            res.json({ message: "la publicacion fue eliminadas" });
        });
    }
}
const publicacionController = new PublicacionController();
exports.default = publicacionController;
