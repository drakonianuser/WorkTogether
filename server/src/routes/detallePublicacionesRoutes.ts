import { Router } from "express";

import detallePublicacionController from "../controllers/detallePublicacionController";

class DetallePublicacionRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/detallepu/:idproyecto', detallePublicacionController.list);
        this.router.get('/api/detallepu/:id/:detalle', detallePublicacionController.onepublicacion);
        this.router.post('/api/detallepu/:id', detallePublicacionController.create);
        this.router.put('/api/detallepu/:id', detallePublicacionController.update);
    }
}

const detallePublicacionRoutes = new DetallePublicacionRoutes();
export default detallePublicacionRoutes.router;