import { Router } from "express";

import projectsController from "../controllers/projectsController";

class ProjectRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', projectsController.index);
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;