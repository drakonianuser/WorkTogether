import { Request, Response } from "express";

import pool from "../database";

class ProjectsController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const projects = await pool.query('SELECT * FROM proyectos');
        res.json(projects);
    }

    /**
     * oneproject
    */
    public async oneproject(req: Request, res: Response): Promise<any> {
        const { id }= req.params;
        const project = await pool.query('SELECT * FROM proyectos WHERE id = ?',[id]);
        if  (project.length > 0){
             return res.json(project[0]); 
        }
        res.status(404).json({text: "El proyecto no existe"});
    }

    /**
     * create 
     */
    public async create (req:Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO proyectos set ?', [req.body]);
        res.send("project create");
    }

    /**
     * delete
     */
    public async delete(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FORM proyectos WHERE id = ?'[id]);
        res.json({message : "El proyecto fue eliminado"});
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