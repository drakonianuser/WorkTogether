import { Component, OnInit } from '@angular/core';
import {AuthenticationService, TokenPayload} from '../../../authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  contrasenas = {
    password2: ''
  }
  numero = {
    number: ""
  }
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

  register(){
    this.credentials.celular = parseInt(this.numero.number)
    if(this.credentials.nombre!=""){
      if(this.credentials.apellidos!=""){
        if(this.credentials.correo!=""){
          if(this.credentials.password!=""){
            if(this.contrasenas.password2!=""){
                if(this.numero.number!=""){
                  if(this.credentials.password==this.contrasenas.password2){
                    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.credentials.correo)){
                      
                      this.auth.register(this.credentials).subscribe(
                        () =>{
                          this.router.navigateByUrl('/perfil')
                        },
                        err => {
                          
                        }
                      )
                
                    }else{
                      alert("Debe ingresar una dirección de correo valida")
                    }
                  }else{
                    alert("La contraseña y la confirmación no son iguales")
                  }
                }else{
                  alert("Debe ingresar un numero de celular")
                }
            }else{
              alert("Debe ingresar una confirmación de la contraseña")
            }
          }else{
            alert("Debe ingresar una contraseña")
          }
        }else{
          alert("Debe ingresar un correo")
        }
      }else{
        alert("Debe ingresar un apellido")
      }
    }else{
      alert("Debe ingresar un nombre")
    }

  }
  ngOnInit() {
  }

}
