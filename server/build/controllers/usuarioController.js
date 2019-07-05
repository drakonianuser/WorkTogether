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
class UsuarioController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(user);
        });
    }
    /**
     * oneuser
    */
    oneuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM usuarios WHERE idusuarios = ?', [id]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "El usuario no existe" });
        });
    }
    /**
     * create
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
            res.send("user create");
        });
    }
    /**
     * update
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios SET ? WHERE idusuario = ?'[req.body, id]);
            res.json({ message: "El usuario fue actualizado" });
        });
    }
    /**
     * Delete
     */
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete * from usuarios where idusuario = ?', [id]);
            res.json('usuario Eliminado');
        });
    }
    /**
     * Userxcoreo
     * trae un usuario que cumpla con la condicion de el correo mandado por un fomulario
     * y este retorna un usuario en tipo json
     */
    Userxcoreo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield database_1.default.query('select * from usuarios where correo = ?'[req.body]);
            res.json(usuario);
        });
    }
}
const usuarioController = new UsuarioController();
exports.default = usuarioController;
