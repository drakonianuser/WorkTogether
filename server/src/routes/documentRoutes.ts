import { Router } from "express";

import  documentControllers  from "../controllers/documentControllers";

class DocumentRoutes {
    
    public router: Router = Router();

    constructor(){
        
    }

    /**
     *config 
     */
     config ():void {
        this.router.get('/api/:idproyeto',documentControllers.list);
        this.router.get('/api/:idproyecto/:idDocumento',documentControllers.onedocument);
        this.router.post('/api/:idproyecto',documentControllers.Create);
        this.router.put('/api/:idproyecto/:idDocument',documentControllers.update);
    }

}

const documentRoutes = new DocumentRoutes();
export default documentRoutes.router;