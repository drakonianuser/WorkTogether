import { Request, Response } from "express";

import pool from "../database";

class PublicacionController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const { idproyecto } = req.params;
        const publicaciones = await pool.query('SELECT * FROM publicaciones WHERE proyectos_idproyectos = ?',[idproyecto]);
        const detalle = await pool.query('select * from detallepublicacio')
        res.json({"publicacion":publicaciones,"detalle":detalle});
    }

    /**
     * oneproject
    */
    public async onepublicacion(req: Request, res: Response): Promise<any> {
        const { detalle } = req.params;
        const { idproyecto } = req.params;
        const project = await pool.query('SELECT * FROM publicaciones WHERE idpublicacion , proyectos_idproyectos values ?', [detalle,idproyecto]);
        if (project.length > 0) {
            return res.json(project[0]);
        }
        res.status(404).json({ text: "El proyecto no existe" });
    }

    /**
     * create 
     */
    public async create(req: Request, res: Response): Promise<void> {

        const estatus = await pool.query('INSERT INTO publicaciones set ?', [req.body]);
        res.send("project create");
        res.json(estatus);
    }


    /**
     * update
     */
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE publicaciones SET ? WHERE id = ?',[req.body, id]);
        res.json({ message: "El proyecto fue actualizado" });
    }
    /**
     * Delete
     */
    public async Delete(req: Request, res: Response): Promise<any> {
        const { idpublicaciones } = req.params;
        await pool.query('delete  from worktogether.publicaciones where idpublicaciones = ?', [parseInt(idpublicaciones)]);
        res.json({ message: "la publicacion fue eliminadas" });
    }

}

const publicacionController = new PublicacionController();
export default publicacionController;