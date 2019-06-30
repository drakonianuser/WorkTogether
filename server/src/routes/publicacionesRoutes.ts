import { Router } from "express";

import publicacionController from "../controllers/publicacionControllers";

class PublicacionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/:idproyecto', publicacionController.list);
        this.router.get('/api/:idproyecto/:detalle', publicacionController.onepublicacion);
        this.router.post('/api/', publicacionController.create);
        this.router.put('/api/:id', publicacionController.update);
        this.router.delete('/api/:idpublicaciones', publicacionController.Delete);

    }
}

const publicacionRoutes = new PublicacionRoutes();
export default publicacionRoutes.router;