import { Request, Response } from "express";

import pool from "../database";

class IndexController {
    constructor() {
        
    }

    index (req: Request, res: Response){
        res.send('index')
    }
}

export const indexcontroller = new IndexController();