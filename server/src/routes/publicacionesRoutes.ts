import { Router } from "express";

import publicacionController from "../controllers/publicacionControllers";

class PublicacionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/publicaciones/:idproyecto', publicacionController.list);
        this.router.get('/api/publicacion/:idproyecto/:detalle', publicacionController.onepublicacion);
        this.router.post('/api/publicacion/:id', publicacionController.create);
        this.router.put('/api/publicacion/:id', publicacionController.update);
    }
}

const publicacionRoutes = new PublicacionRoutes();
export default publicacionRoutes.router;