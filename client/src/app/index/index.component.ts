import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from '../services/project-service.service'
import {AuthenticationService, UserDetails} from '../authentication.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  projects: any = [];
  categorias: any = [];
  details: UserDetails
  constructor(private projectService: ProjectServiceService,private auth: AuthenticationService) { 
    
  }

  ngOnInit() {
    this.projectService.getCategoria().subscribe(
      res=>{
        this.categorias = res;
        console.log(this.categorias)
      },
      err => console.log(err)
    )
    this.projectService.getProjectLista().subscribe(
      res => {
        this.projects = res;
        console.log(this.projects)
      },
      err => console.log(err)
    )

    this.auth.profile().subscribe(
      user =>{
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }
  irAProyecto(id: String){
    console.log(id)
  }

}
