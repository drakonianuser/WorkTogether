import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    VistaPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
