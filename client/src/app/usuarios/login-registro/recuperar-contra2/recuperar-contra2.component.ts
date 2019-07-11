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
    this.ProjectService.getOneUser(this.activeRouter.snapshot.params.id).subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    )
  }
}
