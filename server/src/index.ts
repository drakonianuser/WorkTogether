import express, {Application} from "express";
import morgan from 'morgan';
import cors from "cors";
import session from "express-session";
import passport from "passport";

import indexRoutes from "./routes/indexRoutes";
import projectRoutes from "./routes/projectRoutes";
import documentRoutes from "./routes/documentRoutes";
//require("./auth");

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