import { Router } from "express";

import documentControllers from "../controllers/documentControllers";

class DocumentRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    /**
     *config 
     */
    config(): void {
        this.router.get('/api/:idproyecto', documentControllers.list);
        this.router.get('/api/:idproyecto/:idDocumento', documentControllers.onedocument);
        this.router.post('/api/', documentControllers.Create);
        this.router.put('/api/:iddocumentacion', documentControllers.update);
    }

}

const documentRoutes = new DocumentRoutes();
export default documentRoutes.router;