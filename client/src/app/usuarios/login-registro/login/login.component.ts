import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../../../authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    idusuarios: 0,
    nombre: '',
    apellidos: '',
    correo: '',
    password: '',
    tipousuario: ''
  }
  constructor(private auth: AuthenticationService, private router: Router) { }

  login(){
    this.auth.login(this.credentials).subscribe(
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
