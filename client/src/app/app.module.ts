import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RecuperarContra1Component } from './usuarios/login-registro/recuperar-contra1/recuperar-contra1.component';
import { RecuperarContra2Component } from './usuarios/login-registro/recuperar-contra2/recuperar-contra2.component';
import { CrearProyectoComponent } from './proyectos/crear-proyecto/crear-proyecto.component';
import { LoginComponent } from './usuarios/login-registro/login/login.component';
import { RegistroComponent } from './usuarios/login-registro/registro/registro.component';
import { EditarPerfilComponent } from './usuarios/perfiles/editar-perfil/editar-perfil.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { VistaProyectoComponent } from './proyectos/vista-proyecto/vista-proyecto.component';
import { VistaPerfilComponent } from './usuarios/perfiles/vista-perfil/vista-perfil.component';
import { ActualizarProyectoComponent } from './proyectos/actualizar-proyecto/actualizar-proyecto.component';

import {ProjectServiceService} from './services/project-service.service'
import {UserServiceService} from './services/user-service.service'
import {WorkServiceService} from './services/work-service.service'

import {AuthenticationService} from './authentication.service'
import {AuthGuardService} from './auth-guard.service'

import {RouterModule, Route} from '@angular/router';
import { DocumentacionComponent } from './proyectos/documentacion/documentacion.component';

const routes: Route[]=[
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: VistaPerfilComponent},
  {path: 'proyecto', component: VistaProyectoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'recuperar', component: RecuperarContra1Component},
  {path: 'recuperar2/:id', component: RecuperarContra2Component},
  {path: 'actualizar', component: ActualizarProyectoComponent},
  {path: 'CrearProyecto', component: CrearProyectoComponent},
  {path: 'editar', component: EditarPerfilComponent},
  {path: 'proyecto/:id', component: VistaProyectoComponent},
  {path: 'documentacion', component: DocumentacionComponent},
  {path: 'actualizar/:id/:iddetalle', component: ActualizarProyectoComponent},
  {path: 'documentacion/:idproyecto/:idpublicacion/:iddetallepublicacion', component: DocumentacionComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RecuperarContra1Component,
    RecuperarContra2Component,
    CrearProyectoComponent,
    LoginComponent,
    RegistroComponent,
    EditarPerfilComponent,
    NavegacionComponent,
    VistaProyectoComponent,
    VistaPerfilComponent,
    ActualizarProyectoComponent,
    DocumentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    ProjectServiceService,
    UserServiceService,
    WorkServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
