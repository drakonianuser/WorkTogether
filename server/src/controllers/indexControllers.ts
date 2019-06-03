import { Request, Response } from "express";

class IndexController {
    constructor() {
        
    }

    index (req: Request, res: Response){
        res.send('index')
    }
}

export const indexcontroller = new IndexController();