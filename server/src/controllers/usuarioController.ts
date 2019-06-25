import { Request, Response } from "express";

import pool from "../database";

class UsuarioController {
    constructor() {

    }

    public async list(req: Request, res: Response) {
        const user = await pool.query('SELECT * FROM usuarios');

        res.json(user);
    }

    /**
     * oneuser
    */
    public async oneuser(req: Request, res: Response): Promise<any> {
        const { id }= req.params;
        const user = await pool.query('SELECT * FROM usuarios WHERE idusuarios = ?',[id]);
        if  (user.length > 0){
             return res.json(user[0]); 
        }
        res.status(404).json({text: "El usuario no existe"});
    }

    /**
     * create 
     */
    public async create (req:Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
        
        res.send("user create");
    }


    /**
     * update
     */
    public async update(req:Request, res:Response): Promise<any> {
        const { id } = req.params;
        await pool.query('UPDATE usuarios SET ? WHERE id = ?'[req.body, id]);
        res.json({message: "El usuario fue actualizado"});
    }

}

const usuarioController = new UsuarioController();
export default usuarioController;