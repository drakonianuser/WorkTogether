import { Router } from "express";

import projectsController from "../controllers/projectsController";

class ProjectRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/', projectsController.list);
        this.router.get('/api/:id', projectsController.oneproject);
        this.router.post('/api/', projectsController.create);
        this.router.put('/api/:id', projectsController.update);
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;