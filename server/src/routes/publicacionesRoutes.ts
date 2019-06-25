import { Router } from "express";

import projectsController from "../controllers/publicacionControllers";

class ProjectRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/publicaciones/:idproyecto', projectsController.list);
        this.router.get('/api/publicacion/:id', projectsController.onepublicacion);
        this.router.post('/api/publicacion/:id', projectsController.create);
        this.router.put('/api/publicacion/:id', projectsController.update);
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;