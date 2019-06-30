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
     * este metodo espara crear una nueva categoria
     * resive el nombre de la nueva categoria atrabes de un json 
     */
    public async create (req:Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO categoria set ?', [req.body]);
        res.send("categoria create");
    }


    /**
     * update
     * este metodo espara corregir alguna categoria
     * resive el identificador atrabes de la ruta y el json con el nombre de la categoria corregido 
     */
    public async update(req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE categoria SET ? WHERE idcategoria = ?'[req.body, id]);
        res.json({message: "El categoria fue actualizado"});
    }

    /**
     * Delete  
     * este metodo esta para eliminar una categoria en caso de que esta no sea de utilidad 
     * resive el identificador de la categoria atrabes de la ruta y elimina la categoria 
     * de la base de datos 
     */
    public async Delete(req:Request,res:Response):Promise<void> {
        const { id } = req.params;
        await pool.query('delete from worktogether.categoria where idcategoria =?',[id]);
        res.json({message:"categoria eliminada"});
   }

}

const categoriaController = new CategoriaController();
export default categoriaController;