import { Router } from "express";

import autentificacionController from "../controllers/autentificacionControllers";

class AutentificacionRoutes {

    public router: Router = Router();

    constructor() {

    }

    /**
     *config 
     */
    config(): void {
        this.router.post('/api/login', autentificacionController.Registro);
    }

}

const autentificacionRoutes = new AutentificacionRoutes();
export default autentificacionRoutes.router;