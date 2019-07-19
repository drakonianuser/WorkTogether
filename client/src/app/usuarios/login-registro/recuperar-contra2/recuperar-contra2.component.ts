import { Component, OnInit } from '@angular/core';
import {user} from '../../../models/user';
import {ProjectServiceService} from '../../../services/project-service.service' ;
import {AuthenticationService, UserDetails} from '../../../authentication.service';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-recuperar-contra2',
  templateUrl: './recuperar-contra2.component.html',
  styleUrls: ['./recuperar-contra2.component.css']
})
export class RecuperarContra2Component implements OnInit {
  usuario: any=[];
  password = {
    password1: "",
    password2: ""
  }
  user: user = {
    idusuarios: 0,
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    tipousuario: "",
    celular: 0
  };
  constructor(private ProjectService: ProjectServiceService, private auth: AuthenticationService, private router: Router, private activeRouter: ActivatedRoute){ }

  ngOnInit() {
    
  };
  recuperarcontra(){
    if(this.password.password1=="" || this.password.password2==""){
      alert("Debe rellenar los campos")
    }else if(this.password.password1!= this.password.password2){
      alert("Las contraseñas deben ser iguales")
    }else{
      this.ProjectService.getOneUser(this.activeRouter.snapshot.params.id).subscribe(
        res=>{
          console.log(res)
          this.usuario =res
          this.user.idusuarios = this.usuario.idusuarios
          this.user.nombre = this.usuario.nombre
          this.user.apellidos = this.usuario.apellidos
          this.user.correo = this.usuario.correo
          this.user.celular = this.usuario.celular
          this.user.tipousuario = this.usuario.tipousuario
          this.user.password= this.password.password1
          console.log(this.user)
          this.ProjectService.updateUser(this.activeRouter.snapshot.params.id,this.user).subscribe(
            res=>{
              console.log(res)
              this.router.navigateByUrl('/login')
            }
          )
        },
        err => console.log(err)
      )
    }
 
  }
}
