import { Router } from "express";

import projectsController from "../controllers/projectsController";

class ProjectRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/proyectos', projectsController.list);
        this.router.get('/api/proyectos/:id', projectsController.oneproject);
        this.router.post('/api/proyectos', projectsController.create);
        this.router.put('/api/proyectos/:id', projectsController.update);
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;