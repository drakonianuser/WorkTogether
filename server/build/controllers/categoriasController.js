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
            const Categoria = yield database_1.default.query('SELECT * FROM categoria');
            res.json(Categoria);
        });
    }
    /**
     * one
    */
    one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const project = yield database_1.default.query('SELECT * FROM categoria WHERE idcategoria = ?', [id]);
            if (project.length > 0) {
                return res.json(project[0]);
            }
            res.status(404).json({ text: "la categoria no existe" });
        });
    }
    /**
     * create
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO categoria set ?', [req.body]);
            res.send("categoria create");
        });
    }
    /**
     * update
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE categoria SET ? WHERE id = ?'[req.body, id]);
            res.json({ message: "El categoria fue actualizado" });
        });
    }
}
const categoriaController = new CategoriaController();
exports.default = categoriaController;
