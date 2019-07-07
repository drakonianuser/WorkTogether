import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ProjectServiceService} from '../../services/project-service.service';
@Component({
  selector: 'app-vista-proyecto',
  templateUrl: './vista-proyecto.component.html',
  styleUrls: ['./vista-proyecto.component.css']
})
export class VistaProyectoComponent implements OnInit {
  projects: any =[];

  constructor(private projectService: ProjectServiceService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRouter.snapshot.params;
    console.log(params.id);
    this.projectService.getOneProject(params.id)
     .subscribe(
       res => {
         this.projects = res
         console.log(this.projects)
       },
       err => console.log(err)
     )
  }

}
