import { Router } from "express";

import DetalleProyectoController from "../controllers/detalleProyectoController";

class DetalleProyectoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/detallePro', DetalleProyectoController.list);
        this.router.get('/api/detallePro/:id', DetalleProyectoController.one);
        this.router.post('/api/detallePro', DetalleProyectoController.create);
        this.router.put('/api/detallePro/:id', DetalleProyectoController.update);
    }
}

const detalleProyectoRoutes = new DetalleProyectoRoutes();
export default detalleProyectoRoutes.router;