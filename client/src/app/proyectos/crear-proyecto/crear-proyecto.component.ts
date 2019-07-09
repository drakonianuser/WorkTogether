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
    if(this.detallePro.nombreproyecto!=""){
      if(this.detallePro.descripcion!=""){
        if(this.detallePro.descripcion.length<65535){
          if(this.detallePro.alcance!=""){
            if(this.detallePro.alcance.length<255){ 
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
            }else{
              alert("El alcance no debe superar los 255 caracteres")
            }
          }else{
            alert("Debe ingresar un alcance")
          }
        }else{
          alert("La descripción no debe superar los 65.535 caracteres")
        }
      }else{
        alert("Debe ingresar una descripción")
      }
    }else{
      alert("Debe ingresar un nombre para el proyecto")
    }
    
  }
}
