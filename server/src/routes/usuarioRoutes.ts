import { Router } from "express";

import usuarioController from "../controllers/usuarioController";

class UsuarioRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/', usuarioController.list);
        this.router.get('/api/:id', usuarioController.oneuser);
        this.router.post('/api/', usuarioController.create);
        this.router.put('/api/:id', usuarioController.update);
        this.router.delete('/api/:id', usuarioController.Delete);
        
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;