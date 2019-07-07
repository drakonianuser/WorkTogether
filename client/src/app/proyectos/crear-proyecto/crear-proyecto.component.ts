import { Component, OnInit } from '@angular/core';
import {detallepro} from '../../models/detallepro'
import {project} from '../../models/project'
import {ProjectServiceService} from '../../services/project-service.service'
import {AuthenticationService, UserDetails} from '../../authentication.service'

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})
export class CrearProyectoComponent implements OnInit {

  detallePro: detallepro = {
    iddetalleproyecto: 0,
    nombreproyecto: '',
    descripcion: '',
    alcance: '',
    fechaCreacion: new Date()
  }
  project: project = {
    idproyectos: 0,
    categoria_idcategoria: 0,
    detalleproyecto_iddetalleproyecto: 0,
    users_idusuarios: 0
  }
  constructor(private ProjectService: ProjectServiceService, private auth: AuthenticationService) { }
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


 
    this.ProjectService.createDetalle(this.detallePro.nombreproyecto,this.detallePro)
      .subscribe(
        res => {
          var nombre = {
            iddetalleproyecto: ""
          }
          nombre = res[0]
          this.project.detalleproyecto_iddetalleproyecto = parseInt(nombre.iddetalleproyecto)
          this.project.categoria_idcategoria = 1
          this.project.users_idusuarios = this.details.idusuarios
          this.ProjectService.saveProject(this.project)
          .subscribe(
            res =>{
              console.log(res)
            },
            err => console.error(err)
          )
        },
        err => console.error(err)
      )

  }
}
