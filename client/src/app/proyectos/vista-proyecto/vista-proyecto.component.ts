import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService,UserDetails} from '../../authentication.service';
import {ProjectServiceService} from '../../services/project-service.service';
@Component({
  selector: 'app-vista-proyecto',
  templateUrl: './vista-proyecto.component.html',
  styleUrls: ['./vista-proyecto.component.css']
})
export class VistaProyectoComponent implements OnInit {
  projects: any =[];
  publicaciones: any =[];
  detalles1: any = [];
  details: UserDetails
  constructor(private auth: AuthenticationService,private projectService: ProjectServiceService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.auth.profile().subscribe(
      user =>{
        this.details = user
      },
      err => console.log(err)
    )
    const params = this.activeRouter.snapshot.params;
    console.log(params.id);
    this.projectService.getOneProject(params.id)
     .subscribe(
       res => {
         this.projects = res
         console.log(this.projects)
         this.projectService.getListaPublicacion(this.projects.proyecto[0].idproyectos)
         .subscribe(
           res=>{
             this.publicaciones = res
             console.log(this.publicaciones)
           },
           err => console.log(err)
         )
       },
       err => console.log(err)
     )

  }

}
