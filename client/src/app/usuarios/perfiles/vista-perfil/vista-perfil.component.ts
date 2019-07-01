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

}
