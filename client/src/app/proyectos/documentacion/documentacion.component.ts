import { Component, OnInit, NgZone  } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService, UserDetails} from '../../authentication.service';
import {ProjectServiceService} from '../../services/project-service.service';
import {documentacion} from '../../models/documentacion';
import {imagen} from '../../models/imagen';
@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {
  publicacion: any=[];
  project: any=[];
  project2: any=[];
  usu: any=[];
  oprimido: Boolean = false
  idusuario: String = ""
  details: UserDetails
  documentacion: documentacion = {
    iddocumentacion: 0,
    contenido: "",
    publicaciones_idpublicaciones: 2,
    publicaciones_proyectos_idproyectos: 1,
    publicaciones_proyectos_users_idusuarios: 1
  }

  imagen: imagen = {
    idimagen: 0,
    imagenurl: "",
    iddocumentacion: 1
  }

  documentaciones: any=[];
  imagenes: any=[];
  Nombre: ""

  constructor(private zone: NgZone,private projectService: ProjectServiceService,private auth: AuthenticationService,private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.auth.profile().subscribe(
      user =>{
        this.details = user
      },
      err => console.log(err)
    )

    this.projectService.getListaDocumentacion(this.activeRouter.snapshot.params.idpublicacion)
     .subscribe(
       res=>{
         this.documentaciones = res
       },
       err => console.log(err)
     )
    this.projectService.getListaImagen() 
     .subscribe(
       res=>{
         this.imagenes = res
       },
       err => console.log(err)
     )  


    const idproyecto = this.activeRouter.snapshot.params.idproyecto
    const idpublicacion = this.activeRouter.snapshot.params.idpublicacion
    const iddetallepublicacion = this.activeRouter.snapshot.params.iddetallepublicacion
    console.log(idproyecto)
    console.log(idpublicacion)
    console.log(iddetallepublicacion)
    this.projectService.getOneDetallePu(iddetallepublicacion,"1")
      .subscribe(
        res=>{
          this.publicacion = res;
          console.log(this.publicacion)
        },
        err => console.log(err)
      )
    this.projectService.getProjectLista()
        .subscribe(
          res=>{
            this.project = res;
            for(let projec of this.project.proyect){
              if(projec.idproyectos==idproyecto){
                const iddetallepro = projec.detalleproyecto_iddetalleproyecto
                this.idusuario = projec.users_idusuarios
                for(let detalle of this.project.detalle){
                  if(detalle.iddetalleproyecto==iddetallepro){
                    this.project2 = detalle
                    console.log(this.project2)
                  }
                }
              }
            }
          }
        )
  }

  boton(){
    this.oprimido=true
  }
  savedetalle(){
    this.auth.profile().subscribe(
      user =>{
        this.details = user
        this.documentacion.publicaciones_idpublicaciones = this.activeRouter.snapshot.params.idpublicacion
        this.documentacion.publicaciones_proyectos_idproyectos = this.activeRouter.snapshot.params.idproyecto
        this.documentacion.publicaciones_proyectos_users_idusuarios = this.details.idusuarios
        this.projectService.createDocumen(this.documentacion.contenido,this.documentacion)
         .subscribe(
           res =>{
            var id = {
              iddocumentacion: ""
            }
            id = res[0]
            this.imagen.iddocumentacion = parseInt(id.iddocumentacion)
            this.projectService.createImagen(this.imagen)
             .subscribe(
               res =>{
                 console.log(res)
                 this.zone.runOutsideAngular(() => {
                  location.reload();
                 });
               },
               err => {
                 console.log(err)
                 this.zone.runOutsideAngular(() => {
                  location.reload();
                 });
               }
             )
           },
           err => console.log(err)
         )
      },
      err => {
        console.error(err)
      }
    )

  }

  correo() {
    this.projectService.getOneUser(this.idusuario).subscribe(
      res=>{
        this.usu = res
        let user = {
          name: this.details.nombre+" "+this.details.apellidos,
          email: this.usu.correo,
          nombreProyecto: this.project2.nombreproyecto,
          version: this.publicacion[0].ver,
          fecha: this.publicacion[0].fechapublicacion.substring(0,10),
          celular: this.details.celular,
          email2: this.details.correo
        }

        this.projectService.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      
          data => {
            let res:any = data; 
            console.log(
              `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
            );
          },
          err => {
            console.log(err);
          },() => {
          }
        );
      },
      err =>console.log(err)
    )


  }


}
