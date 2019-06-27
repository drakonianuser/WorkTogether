import { Router } from "express";

import ReportesController from "../controllers/reportesControllers";

class ReportesRoutes {

    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/api/', ReportesController.list);
        this.router.get('/api/:id', ReportesController.one);
        this.router.post('/api/', ReportesController.create);
        this.router.put('/api/:id', ReportesController.update);
        this.router.delete('/api/:id', ReportesController.Delete);
    }
}

const reportesRoutes = new ReportesRoutes();
export default reportesRoutes.router;