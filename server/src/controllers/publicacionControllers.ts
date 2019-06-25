import { Request, Response } from "express";

import pool from "../database";

class ProjectsController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const { idproyecto } = req.params;
        const publicaciones = await pool.query('SELECT * FROM publicaciones WHERE proyectos_idproyectos = ?'[idproyecto]);
        const detallepublicaciones = await pool.query('SELECT * FROM detalleproyecto where iddetallepublicacion = ?'[publicaciones.iddetallepublicacion]);
        res.json(publicaciones);
        res.json(detallepublicaciones);
    }

    /**
     * oneproject
    */
    public async onepublicacion(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const project = await pool.query('SELECT * FROM detallepublicacion WHERE iddetallepublicacion = ?', [id]);
        if (project.length > 0) {
            return res.json(project[0]);
        }
        res.status(404).json({ text: "El proyecto no existe" });
    }

    /**
     * create 
     */
    public async create(req: Request, res: Response): Promise<void> {

        const estatus = await pool.query('INSERT INTO publicaciones ? vaules ?', [req.body]);
        res.send("project create");
        res.json(estatus);
    }


    /**
     * update
     */
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE proyectos SET ? WHERE id = ?'[req.body, id]);
        res.json({ message: "El proyecto fue actualizado" });
    }

}

const projectscontroller = new ProjectsController();
export default projectscontroller;