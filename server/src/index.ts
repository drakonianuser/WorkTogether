import express, {Application} from "express";
import morgan from 'morgan';
import cors from "cors";
import session from "express-session";
import passport from "passport";

import indexRoutes from "./routes/indexRoutes";
import projectRoutes from "./routes/projectRoutes";
import documentRoutes from "./routes/documentRoutes";
import usuarioRoutes from "./routes/usuarioRoutes";
import categoriaRutes from "./routes/categoriasRoutes";
import detalleProyectoRoutes from "./routes/detalleProyectoRoutes";
import comentariosRoutes from "./routes/comentariosRoutes";
import publicacionesRoutes from "./routes/publicacionesRoutes";
import detallePublicacionesRoutes from "./routes/detallePublicacionesRoutes";
import imagenesRoutes from "./routes/imangenesRoutes";
import reportesRoutes from "./routes/reportesRoutes";
//import  from "./routes/";




class Server {
    public app: Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(session({
            secret: "togetherwork",
            resave: false,
            saveUninitialized: true,
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());

    }

    //rutas
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/projects',projectRoutes);
        this.app.use('/document',documentRoutes);
        this.app.use('/usuario',usuarioRoutes);
        this.app.use('/categoria',categoriaRutes);
        this.app.use('/detallepro',detalleProyectoRoutes);
        this.app.use('/comentarios',comentariosRoutes);
        this.app.use('/pulicaciones', publicacionesRoutes);
        this.app.use('/detallepu',detallePublicacionesRoutes);
        this.app.use('/imagenes',imagenesRoutes);
        this.app.use('/reportes',reportesRoutes);
        
    }
    
    //conecion
    start():void {
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server en puerto', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();