import { Router } from "express";

import categoriaController from "../controllers/categoriasController";

class CategoriaRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/categorias', categoriaController.list);
        this.router.get('/api/categorias/:id', categoriaController.one);
        this.router.post('/api/categorias', categoriaController.create);
        this.router.put('/api/categorias/:id', categoriaController.update);
        this.router.delete('/api/categorias/:id',categoriaController.Delete);
    }
}

const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;