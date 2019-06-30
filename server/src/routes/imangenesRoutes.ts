import { Router } from "express";

import imagenesController from "../controllers/imagenesController";

class ImagenesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/', imagenesController.list);
        this.router.get('/api/d/:iddocument', imagenesController.oneproyectoImagens);
        this.router.get('/api/:idimagen',imagenesController.oneImagens);
        this.router.post('/api/', imagenesController.create);
        this.router.put('/api/:id', imagenesController.update);
        this.router.delete('/api/:id', imagenesController.Delete);
    }
}

const imagenesRoutes = new ImagenesRoutes();
export default imagenesRoutes.router;