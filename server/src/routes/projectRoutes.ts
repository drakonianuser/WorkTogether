import { Router } from "express";

import projectsController from "../controllers/projectsController";

class ProjectRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', projectsController.list);
        this.router.get('/:id', projectsController.oneproject);
        this.router.post('/', projectsController.create);
        this.router.delete('/:id', projectsController.delete);
        this.router.put('/:id', projectsController.update);
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;