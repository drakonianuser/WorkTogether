import { Router } from "express";

import usuarioController from "../controllers/usuarioController";

class UsuarioRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/usuarios', usuarioController.list);
        this.router.get('/api/usuario/:id', usuarioController.oneuser);
        this.router.post('/api/usuarios', usuarioController.create);
        this.router.put('/api/usuario/:id', usuarioController.update);
    }
}

const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router;