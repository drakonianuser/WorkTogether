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
class ImagenesController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const imagen = yield database_1.default.query('SELECT * FROM imagen');
            res.json(imagen);
        });
    }
    /**
     * oneproyectoImagens
     * este metodo espara traer todas las imagens relacionadas con un proyecto y resive atraves
     * de la ruta el id del proyecto
    */
    oneproyectoImagens(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const project = yield database_1.default.query('SELECT * FROM imagen WHERE iddocumentacion = ?', [id]);
            if (project.length > 0) {
                return res.json(project[0]);
            }
            res.status(404).json({ text: "la categoria no existe" });
        });
    }
    /**
     * oneImagen
     * este metodo espara traer solo una imagen y resive como parametro el id de la imagen
     * atraves de la ruta
    */
    oneImagens(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const project = yield database_1.default.query('SELECT * FROM imagen WHERE idimagen = ?', [id]);
            if (project.length > 0) {
                return res.json(project[0]);
            }
            res.status(404).json({ text: "la categoria no existe" });
        });
    }
    /**
     * create
     * este metodo espara crear una nueva categoria
     * resive el nombre de la nueva categoria atrabes de un json
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO categoria set ?', [req.body]);
            res.send("categoria create");
        });
    }
    /**
     * update
     * este metodo espara cambiar una imagen
     * resive el id de la imagen anterior para remplasarla en el mismo espacio
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE imagen SET ? WHERE idimagen = ?'[req.body, id]);
            res.json({ message: "la imagen fue actualizado" });
        });
    }
    /**
     * Delete
     * este metodo esta para eliminar una imagen
     * resive el id de la imagen para eliminarla
     */
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from worktogether.imagen where idmagen =?', [id]);
        });
    }
}
const imagenesController = new ImagenesController();
exports.default = imagenesController;
