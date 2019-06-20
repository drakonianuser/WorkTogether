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
        this.router.get('/api/document/:idproyeto',documentControllers.list);
        this.router.get('/api/document/:idproyecto/:idDocumento',documentControllers.onedocument);
        this.router.post('/api/document/:idproyecto',documentControllers.Create);
        this.router.put('/api/document/:idproyecto/:idDocument',documentControllers.update);
    }

}

const documentRoutes = new DocumentRoutes();
export default documentRoutes.router;