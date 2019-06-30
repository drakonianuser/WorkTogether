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
class DocumentController {
    constructor() {
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idproyecto } = req.params;
            const documents = yield database_1.default.query('SELECT * FROM documentacion WHERE publicaciones_idpublicaciones = ?', [idproyecto]);
            res.json(documents);
        });
    }
    /**
     * onedocument
     */
    onedocument(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDocumento } = req.params;
            const document = yield database_1.default.query('SELECT * FROM documentacion WHERE iddocumentacion = ? ', [idDocumento]);
            if (document.length > 0) {
                return res.json(document[0]);
            }
            ;
            res.status(404).json({ text: "El documento no existe" });
        });
    }
    /**
     * Create
     */
    Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO documentacion SET ?', [req.body]);
            res.send("document create");
        });
    }
    /**
     * update
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddocumentacion } = req.params;
            yield database_1.default.query('UPDATE documentacion SET ? WHERE iddocumentacion = ? ', [req.body, iddocumentacion]);
            res.json({ message: "El proyecto fue actualizado" });
        });
    }
}
const documentController = new DocumentController();
exports.default = documentController;
