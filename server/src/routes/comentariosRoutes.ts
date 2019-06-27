import { Router } from "express";

import categoriaController from "../controllers/categoriasController";

class CategoriaRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/:id', categoriaController.list);
        this.router.post('/api/', categoriaController.create);
        this.router.put('/api/:id', categoriaController.update);
        this.router.delete('/api/:id', categoriaController.Delete);
    }
}

const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;