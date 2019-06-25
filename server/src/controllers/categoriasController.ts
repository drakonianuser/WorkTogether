import { Request, Response } from "express";

import pool from "../database";

class CategoriaController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const Categoria = await pool.query('SELECT * FROM categoria');
        res.json(Categoria);
    }

    /**
     * one
    */
    public async one(req: Request, res: Response): Promise<any> {
        const { id }= req.params;
        const project = await pool.query('SELECT * FROM categoria WHERE idcategoria = ?',[id]);
        if  (project.length > 0){
             return res.json(project[0]); 
        }
        res.status(404).json({text: "la categoria no existe"});
    }

    /**
     * create 
     */
    public async create (req:Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO categoria set ?', [req.body]);
        
        res.send("categoria create");
    }


    /**
     * update
     */
    public async update(req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE categoria SET ? WHERE id = ?'[req.body, id]);
        res.json({message: "El categoria fue actualizado"});
    }

}

const categoriaController = new CategoriaController();
export default categoriaController;