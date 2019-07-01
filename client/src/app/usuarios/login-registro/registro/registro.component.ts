import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../../../authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  credentials: TokenPayload = {
    idusuarios: 0,
    nombre: '',
    apellidos: '',
    correo: '',
    password: '',
    tipousuario: ''
  }
  constructor(private auth: AuthenticationService, private router: Router) { }

  register(){
    this.auth.register(this.credentials).subscribe(
      () =>{
        this.router.navigateByUrl('/perfil')
      },
      err => {
        console.log("hola")
      }
    )
  }
  ngOnInit() {
  }

}
