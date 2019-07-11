import { Request, Response } from "express";

import pool from "../database";

class DetalleProyectoController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const Categoria = await pool.query('SELECT * FROM detalleproyecto');
        res.json(Categoria);
    }

    /**
     * one hello
    */
    public async one(req: Request, res: Response): Promise<any> {
        const { id }= req.params;
        const project = await pool.query('SELECT * FROM detalleproyecto WHERE iddetalleproyecto = ?',[id]);
        const unepro = await pool.query('SELECT * FROM proyectos where detalleproyecto_iddetalleproyecto = ?',[id]);
        if  (project.length > 0){
            const pro = project[0];
            const c = unepro[0];
            const correo = await pool.query('select correo from usuarios where idusuarios =?',[c['usuarios_idusuarios']]);
             return res.json({'proyecto':pro,'correo':correo}); 
        }
        res.status(404).json({text: "la detalleproyecto no existe"});
    }

    /**
     * create 
     */
    public async create (req:Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO detalleproyecto set ?', [req.body]);
        
        res.send("detalleproyecto create");
    }


    /**
     * update
     */
    public async update(req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE detalleproyecto SET ? WHERE id = ?'[req.body, id]);
        res.json({message: "El detalleproyecto fue actualizado"});
    }

}

const detalleProyectoController = new DetalleProyectoController();
export default detalleProyectoController;