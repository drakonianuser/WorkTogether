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
class CategoriaController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddocumento } = req.params;
            const comentarios = yield database_1.default.query('SELECT * FROM comentarios where iddocumento = ? ', [iddocumento]);
            res.json(comentarios);
        });
    }
    /**
     * create
     * este metodo espara crear una nueva categoria
     * resive el nombre de la nueva categoria atrabes de un json
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO comentarios SET ?', [req.body]);
            res.send("comentario create");
        });
    }
    /**
     * update
     * este metodo espara corregir alguna comentarios
     * resive el identificador atrabes de la ruta y el json con el nombre de la categoria corregido
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE comentarios SET ? WHERE idcomentarios = ?', [req.body, id]);
            res.json({ message: "El comentarios fue actualizado" });
        });
    }
    /**
     * Delete
     * este metodo esta para eliminar una categoria en caso de que esta no sea de utilidad
     * resive el identificador de la categoria atrabes de la ruta y elimina la categoria
     * de la base de datos
     */
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from worktogether.comentario where idcomentarios =?', [id]);
        });
    }
}
const categoriaController = new CategoriaController();
exports.default = categoriaController;
