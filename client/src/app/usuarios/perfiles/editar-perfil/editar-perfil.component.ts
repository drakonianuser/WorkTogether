import { Component, OnInit } from '@angular/core';
import {user} from '../../../models/user'
import {ProjectServiceService} from '../../../services/project-service.service' 
import {AuthenticationService, UserDetails} from '../../../authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  usuario: any=[];
  numero = {
    number: ""
  }
  user: user = {
    idusuarios: 0,
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    tipousuario: "",
    celular: 0
  }

  constructor(private ProjectService: ProjectServiceService, private auth: AuthenticationService, private router: Router) { }
  details: UserDetails
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

  updateUser(){
    if(this.user.nombre=="" && this.user.apellidos=="" && this.user.correo=="" && this.numero.number==""){
      alert("Debe ingresar al menos un campo a modificar")
    }else{
      this.user.idusuarios = this.details.idusuarios
      this.user.password = this.details.password
      this.user.tipousuario = this.details.tipousuario
      if(this.user.nombre==""){
        this.user.nombre = this.details.nombre
      }
      if(this.user.apellidos==""){
        this.user.apellidos = this.details.apellidos
      }
      if(this.user.correo==""){
        this.user.correo = this.details.correo
      }
      if(this.numero.number==""){
        this.user.celular = this.details.celular
      }else{
        this.user.celular = parseInt(this.numero.number)
        alert("entro"+this.user.celular)
      }
      if(this.user.correo==""){
        this.user.correo = this.details.correo
      }else if(this.user.correo!=""){
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.user.correo.toString())){
          this.ProjectService.getUserXCorreo(this.user.correo).subscribe(
            res =>{
              this.usuario = res
              console.log(this.usuario.length)
              if(this.usuario.length>0){
                alert("Ese correo ya se encuentra registrado")
              }else{
                this.ProjectService.updateUser(this.details.idusuarios.toString(), this.user)
                .subscribe(
                  res => {
                    this.router.navigateByUrl('/perfil')
                  },
                  err => console.log(err)
                )
              }
            }
          )
        }else{
          alert("Debe digitar un correo valido")
        }
      }

    }
 
  }

  prueba(){

  }

}
