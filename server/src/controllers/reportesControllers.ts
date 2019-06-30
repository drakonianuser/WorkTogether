import { Request, Response } from "express";

import pool from "../database";

class ReportesController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const reporte = await pool.query('SELECT * FROM reportes');
        res.json(reporte);
    }

    /**
     * one
    */
    public async one(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const project = await pool.query('SELECT * FROM reportes WHERE idreportes = ?', [id]);
        if (project.length > 0) {
            return res.json(project[0]);
        }
        res.status(404).json({ text: "El reporte no existe" });
    }

    /**
     * create 
     * este metodo espara crear un nuevo reporte 
     */
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO reportes set ?', [req.body]);
        res.send("reporte create");
    }


    /**
     * update
     * este metodo espara corregir alguna categoria
     * resive el identificador atrabes de la ruta y el json con el nombre de la categoria corregido 
     */
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE reportes SET ? WHERE idreportes = ?',[req.body, id]);
        res.json({ message: "El reporte fue actualizado" });
    }

    /**
     * Delete  
     * este metodo esta para eliminar un reporte. 
     * este resive el id del reporte 
     */
    public async Delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('delete from worktogether.reportes where idreporte =?', [id]);
        res.json({message:"reporte eliminado"});
    }

}

const reportesController = new ReportesController();
export default reportesController;