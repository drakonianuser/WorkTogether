import { Router } from "express";

import imagenesController from "../controllers/imagenesController";

class ImagenesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/imagenes', imagenesController.list);
        this.router.get('/api/imagenes/:iddocument', imagenesController.oneproyectoImagens);
        this.router.get('/api/imagen/:idimagen',imagenesController.oneImagens);
        this.router.post('/api/imagen', imagenesController.create);
        this.router.put('/api/imagen/:id', imagenesController.update);
        this.router.delete('/api/imagen/:id', imagenesController.Delete);
    }
}

const imagenesRoutes = new ImagenesRoutes();
export default imagenesRoutes.router;