import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectServiceService} from '../../services/project-service.service';
import {detallepublicacion} from '../../models/detallepublicacion';
import {publicacion} from '../../models/publicacion';
import {AuthenticationService,UserDetails} from '../../authentication.service'
@Component({
  selector: 'app-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styleUrls: ['./actualizar-proyecto.component.css']
})
export class ActualizarProyectoComponent implements OnInit {
  projects: any =[];
  number = {
    ver: ""
  }

  detallepublicacion: detallepublicacion = {
    iddetallepublicacion: 0,
    ver: 0,
    resumen: "",
    fechapublicacion: new Date()
  }

  publicacion: publicacion = {
    idpublicaciones: 0,
    proyectos_idproyectos: 1,
    proyectos_users_idusuarios: 1,
    detallepublicacion_iddetallepublicacion: 1
  }



  constructor(private projectService: ProjectServiceService, private router: Router, private activeRouter: ActivatedRoute, private auth: AuthenticationService) { }
  details: UserDetails


  ngOnInit() {
    this.auth.profile().subscribe(
      user =>{
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }
  saveNewDetalle(){
    this.detallepublicacion.ver = parseFloat(this.number.ver)
    this.projectService.createDetallePu(this.detallepublicacion.resumen,this.detallepublicacion)
      .subscribe(
        res => {
          const params = this.activeRouter.snapshot.params;
          this.publicacion.proyectos_idproyectos = params.id
          this.publicacion.proyectos_users_idusuarios = this.details.idusuarios
          var id = {
            iddetallepublicacion: ""
          }
          id = res[0]
          this.publicacion.detallepublicacion_iddetallepublicacion = parseInt(id.iddetallepublicacion)
          this.projectService.createPublicacion(this.publicacion)
           .subscribe(
             res => {
               console.log(res)
             },
             err => console.log(err)
           )
        },
        err => console.log(err)
      )
  }

}
