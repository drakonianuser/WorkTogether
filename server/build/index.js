"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const documentRoutes_1 = __importDefault(require("./routes/documentRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const detalleProyectoRoutes_1 = __importDefault(require("./routes/detalleProyectoRoutes"));
const comentariosRoutes_1 = __importDefault(require("./routes/comentariosRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const detallePublicacionesRoutes_1 = __importDefault(require("./routes/detallePublicacionesRoutes"));
const imangenesRoutes_1 = __importDefault(require("./routes/imangenesRoutes"));
const reportesRoutes_1 = __importDefault(require("./routes/reportesRoutes"));
const Users = require("./routes/Users");
const nodemailer = require("nodemailer");
const correo = require("./correo.json");
//import  from "./routes/";
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_session_1.default({
            secret: "togetherwork",
            resave: false,
            saveUninitialized: true,
        }));
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());

    this.app.post("/recuperarcontra", (req, res) =>{
      console.log("request came");
      let user = req.body;
      sendRecuperar(user, info =>{
        console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
        res.send(info);
      });
    });

    async function sendRecuperar(user, callback){
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: correo.email,
          pass: correo.password
        }
      });

      let mailOptions = { 
        from: '"Worktogether"<santiagopena2001@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Recuperar cuenta WorkTogether ", // Subject line
        html: `<h3>Se ha solicitado recuperar la contraseña de su cuenta registrada en Worktogether 
         </h3> <h3>Ingrese al siguiente link para recuperar su contraseña: ${user.link}</h3>`
      };
      
      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions);
    
      callback(info);
    }
        
    this.app.post("/sendmail", (req, res) => {
        console.log("request came");
        let user = req.body;
        sendMail(user, info => {
          console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
          res.send(info);
        });
      });

      async function sendMail(user, callback) {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: correo.email,
            pass: correo.password
          }
        });
      
        let mailOptions = { 
          from: '"Worktogether"<santiagopena2001@gmail.com>', // sender address
          to: user.email, // list of receivers
          subject: "Solicitud de apoyo "+user.name, // Subject line
          html: `<h3>Me gustaría apoyarte con el desarrollo de tu proyecto: ${user.nombreProyecto}
           </h3> <h3>en la versión: ${user.version}</h3> <h3>publicado: ${user.fecha}</h3>
          <h4> Atentamente: ${user.name} celular: ${user.celular} correo: ${user.email2}</h4>`
        };
       
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
      
        callback(info);
      }

    }


   
    //rutas
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/projects', projectRoutes_1.default);
        this.app.use('/documentacion', documentRoutes_1.default);
        this.app.use('/users', usuarioRoutes_1.default);
        this.app.use('/categoria', categoriasRoutes_1.default);
        this.app.use('/detallepro', detalleProyectoRoutes_1.default);
        this.app.use('/comentarios', comentariosRoutes_1.default);
        this.app.use('/publicaciones', publicacionesRoutes_1.default);
        this.app.use('/detallepu', detallePublicacionesRoutes_1.default);
        this.app.use('/imagenes', imangenesRoutes_1.default);
        this.app.use('/reportes', reportesRoutes_1.default);
        this.app.use('/users', Users);
    }
    //conecion
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server en puerto', this.app.get('port'));
        });
    }

}
const server = new Server();
server.start();
