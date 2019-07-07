import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from '../services/project-service.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  projects: any = [];
  
  constructor(private projectService: ProjectServiceService) { 
    
  }

  ngOnInit() {
    this.projectService.getProjectLista().subscribe(
      res => {
        this.projects = res;
        console.log(this.projects)
      },
      err => console.log(err)
    )
  }
  irAProyecto(id: String){
    console.log(id)
  }

}
