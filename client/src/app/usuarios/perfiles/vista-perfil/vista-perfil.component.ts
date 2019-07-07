import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../../../authentication.service'

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css']
})
export class VistaPerfilComponent implements OnInit {
  details: UserDetails
  constructor(private auth: AuthenticationService){}
  

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
  foros:Array<any>=[
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'},
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'},
    {nombreProyecto:'Work Together',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis eius itaque! Dolorum, inventore voluptas omnis esse suscipit culpa reiciendis officia veniam sed sunt expedita quam iusto? Natus, corrupti. Earum!'}
    
  ] 

}
