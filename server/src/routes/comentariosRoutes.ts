import { Router } from "express";

import ComentariosController from "../controllers/ComentariosController";

class ComentariosRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/:id', ComentariosController.list);
        this.router.post('/api/', ComentariosController.create);
        this.router.put('/api/:id', ComentariosController.update);
        this.router.delete('/api/:id', ComentariosController.Delete);
    }
}

const comentariosRoutes = new ComentariosRoutes();
export default comentariosRoutes.router;