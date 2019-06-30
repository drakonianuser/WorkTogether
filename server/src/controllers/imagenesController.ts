import { Request, Response } from "express";

import pool from "../database";

class ImagenesController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const imagen = await pool.query('SELECT * FROM imagen');
        res.json(imagen);
    }

    /**
     * oneproyectoImagens
     * este metodo espara traer todas las imagens relacionadas con un proyecto y resive atraves 
     * de la ruta el id del proyecto
    */
    public async oneproyectoImagens(req: Request, res: Response): Promise<any> {
        const { iddocument } = req.params;
        const project = await pool.query('SELECT * FROM imagen WHERE iddocumentacion = ?', [iddocument]);
        if (project.length > 0) {
            return res.json(project);
        }
        res.status(404).json({ text: "El documento no tiene imagens o no existe" });
    }

    /**
     * oneImagen
     * este metodo espara traer solo una imagen y resive como parametro el id de la imagen 
     * atraves de la ruta 
    */
    public async oneImagens(req: Request, res: Response): Promise<any> {
        const { idimagen } = req.params;
        const project = await pool.query('SELECT * FROM imagen WHERE idimagen = ?', [idimagen]);
        if (project.length > 0) {
            return res.json(project[0]);
        }
        res.status(404).json({ text: "la imagen no existe" });
    }

    /**
     * create 
     * este metodo espara crear una nueva categoria
     * resive el nombre de la nueva categoria atrabes de un json 
     */
    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO imagen set ?', [req.body]);
        res.send("imagen create");
    }


    /**
     * update
     * este metodo espara cambiar una imagen 
     * resive el id de la imagen anterior para remplasarla en el mismo espacio 
     */
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE imagen SET ? WHERE idimagen = ?'[req.body, id]);
        res.json({ message: "la imagen fue actualizado" });
    }

    /**
     * Delete  
     * este metodo esta para eliminar una imagen 
     * resive el id de la imagen para eliminarla 
     */
    public async Delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('delete from worktogether.imagen where idimagen =?', [id]);
        res.json({menssage:"imagen eliminada"});
    }

}

const imagenesController = new ImagenesController();
export default imagenesController;