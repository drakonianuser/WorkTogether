import { Router } from "express";

import DetalleProyectoController from "../controllers/detalleProyectoController";

class DetalleProyectoRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/', DetalleProyectoController.list);
        this.router.get('/api/:id', DetalleProyectoController.one);
        this.router.post('/api/', DetalleProyectoController.create);
        this.router.put('/api/:id', DetalleProyectoController.update);
    }
}

const detalleProyectoRoutes = new DetalleProyectoRoutes();
export default detalleProyectoRoutes.router;