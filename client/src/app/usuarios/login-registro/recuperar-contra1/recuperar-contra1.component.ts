import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../authentication.service'
import {ProjectServiceService} from '../../../services/project-service.service'
import {} from '../../../models/user'

@Component({
  selector: 'app-recuperar-contra1',
  templateUrl: './recuperar-contra1.component.html',
  styleUrls: ['./recuperar-contra1.component.css']
})
export class RecuperarContra1Component implements OnInit {
  usuario: any=[];
  correos = {
    correo1: "",
    correo2: ""
  }
  constructor(private projectService: ProjectServiceService,private auth: AuthenticationService) { }

  ngOnInit() {

  }
  recuperar(){
    if(this.correos.correo1 =="" || this.correos.correo2==""){
      alert("Debe rellenar todos los campos")
    }else{
      if(this.correos.correo1!=this.correos.correo2){
        alert("Los correos deben ser iguales")
      }else{
        this.projectService.getUserXCorreo(this.correos.correo1).subscribe(
          res=>{
            this.usuario = res;
            console.log(this.usuario[0].idusuarios)
            let user = {
              email: this.usuario[0].correo,
              link: "http://localhost:4200/recuperar2/"+this.usuario[0].idusuarios
            }


            this.projectService.recuperar("http://localhost:3000/recuperarcontra", user).subscribe(
              data =>{
                let res:any = data; 
                console.log(res.messageId);
              },
              err => {
                console.log(err);
              },() => {
              }
            );



          },
          err => console.log(err)
        )
      }
    }
  }
 

}
