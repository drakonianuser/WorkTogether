import { Request, Response } from "express";

import pool from "../database";

class ProjectsController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const projects = await pool.query('SELECT * FROM proyectos');
        const detalleprojects = await pool.query('SELECT * FROM detalleproyecto');
        res.json({"proyect":projects, "detalle":detalleprojects});
    }

    /**
     * oneproject
    */
    public async oneproject(req: Request, res: Response): Promise<any> {
        const { id }= req.params;
        const project = await pool.query('SELECT * FROM detalleproyecto WHERE iddetalleproyecto = ?',[id]);
        const unepro = await pool.query('SELECT * FROM proyectos where detalleproyecto_iddetalleproyecto = ?',[id]);
        if  (project.length > 0){
            const pro = project[0];
            const c = unepro[0];
            const correo = await pool.query('select correo from usuarios where idusuarios =?',[c['usuarios_idusuarios']]);
             return res.json({'proyecto':pro,'correo':correo}); 
        }
        res.status(404).json({text: "El proyecto no existe"}); 
    }  

    /**
     * create 
     */
    public async create (req:Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO proyectos set ?', [req.body]);
        
        res.send("project create");
    }


    /**
     * update
     */
    public async update(req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE proyectos SET ? WHERE id = ?'[req.body, id]);
        res.json({message: "El proyecto fue actualizado"});
    }

}

const projectscontroller = new ProjectsController();
export default projectscontroller;