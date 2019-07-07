import { Component, OnInit } from '@angular/core';
import {detallepro} from '../../models/detallepro'
import {project} from '../../models/project'
import {ProjectServiceService} from '../../services/project-service.service'
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
  constructor(private ProjectService: ProjectServiceService) { }

  ngOnInit() {
  }

  saveNewDetalle(){
    this.ProjectService.createDetalle(this.detallePro)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
    console.log(this.detallePro)
  }
}
