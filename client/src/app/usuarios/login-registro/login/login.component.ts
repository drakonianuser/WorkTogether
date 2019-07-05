import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../../../authentication.service'
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

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
    tipousuario: '',
    celular: 0
  }
  constructor(private auth: AuthenticationService, private router: Router) { }



  login(){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.credentials.correo)){
      if(this.credentials.password!=""){
        this.auth.login(this.credentials).subscribe(
          () =>{
            this.router.navigateByUrl('/perfil')
          },
          err => {
            alert("Correo o contraseña incorrecta");
          }
        )
      }else{
        alert("Debe ingresar una contraseña")
      }
    } else {
      alert("Debe ingresar una dirección de email valida");
    }
  }
  
  ngOnInit() {
  }

}
