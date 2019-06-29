import { Router } from "express";

import ReportesController from "../controllers/reportesControllers";

class ReportesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/reportes', ReportesController.list);
        this.router.get('/api/reportes/:id', ReportesController.one);
        this.router.post('/api/reportes', ReportesController.create);
        this.router.put('/api/reportes/:id', ReportesController.update);
        this.router.delete('/api/reportes/:id', ReportesController.Delete);
    }
}

const reportesRoutes = new ReportesRoutes();
export default reportesRoutes.router;