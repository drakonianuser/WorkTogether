import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../../../authentication.service'
import {ProjectServiceService} from '../../../services/project-service.service'
@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {
  projects: any = [];
  projects2: any = [];
  projects3: any = [];
  categorias: any = [];
  details: UserDetails
  constructor(private projectService: ProjectServiceService,private auth: AuthenticationService){}
  

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
        this.projects3 = this.projects.detalle

        this.auth.profile().subscribe(
          user =>{
            this.details = user
                    
        for(let project of this.projects3){
          if(this.projects.proyect[i].users_idusuarios == this.details.idusuarios){
            this.projects2[i2] = this.projects.detalle[i]
            i2++
          }
          i++
        }
        console.log("hola")
        console.log(this.projects2)
          },
          err => {
            console.error(err)
          }
        )

      },
      err => console.log(err)
    )


    var i = 0
    var i2 = 0

  }
  foros:Array<any>=[
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'},
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'},
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'}
    
  ] 

}
