import { Request, Response } from "express";

import pool from "../database";

class DocumentController {
    constructor() {
        
    }

    public async list(req: Request, res: Response){
        const { idproyecto } = req.params;
        const documents = await pool.query('SELECT * FROM documentacion WHERE publicaciones_idpublicaciones = ?',[idproyecto] );
        res.json(documents);
    }

    /**
     * onedocument
     */
    public async onedocument(req: Request, res: Response): Promise<any> {
        const {  idDocumento } = req.params;
        const document = await pool.query('SELECT * FROM documentacion WHERE iddocumentacion = ? ', [ idDocumento]);
        if (document.length > 0) {
            return res.json(document[0]);
        };
        res.status(404).json({text: "El documento no existe"});
    }

    /**
     * Create
     */
    public async Create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO documentacion SET ?', [req.body] );
        res.send("document create");
    }
    
    
    /**
     * update
     */
    public async update(req: Request, res: Response): Promise<any> {
        const { iddocumentacion } = req.params;
        await pool.query('UPDATE documentacion SET ? WHERE iddocumentacion = ? ', [req.body, iddocumentacion ]);
        res.json({message: "El proyecto fue actualizado"});
    }
}

const documentController = new DocumentController();
export default documentController;