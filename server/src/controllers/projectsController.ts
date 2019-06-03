import { Request, Response } from "express";

import pool from "../database";

class ProjectsController {
    constructor() {

    }

    index(req: Request, res: Response) {
        pool.query('DESCRIBE usuarios');
    }
}

const projectscontroller = new ProjectsController();
export default projectscontroller;