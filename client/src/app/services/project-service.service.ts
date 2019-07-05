import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {project} from '../models/project'
import {detallepro} from '../models/detallepro'
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  SERVERURL = 'http://localhost:3000/'
  API_URIProject = this.SERVERURL+'projects/api';
  API_URICategoria = this.SERVERURL+'categoria/api';
  API_URIDetalle = this.SERVERURL+'detallepro/api';
  constructor(private http: HttpClient) { }

  //Proyect controller
  getProjectLista(){
    return this.http.get(`${this.API_URIProject}`);
  }
  getOneProject(id: String){
    return this.http.get(`${this.API_URIProject}/${id}`);
  }
  saveProject(Project: project){
    return this.http.post(`${this.API_URIProject}`, Project);
  }
  updateProject(id: String , updateProject: project){
    return this.http.put(`${this.API_URIProject}/${id}`, updateProject);
  }

  //categoria
  getCategoria(){
    return this.http.get(`${this.API_URICategoria}`);
  }
  getOneCategoria(id: String){
    return this.http.get(`${this.API_URICategoria}/${id}`);
  }

  //DetalleProyecto
  getListaDetalle(){
    return this.http.get(`${this.API_URIDetalle}`)
  }
  getOneDetalle(id: String){
    return this.http.get(`${this.API_URIDetalle}/${id}`)
  }
  createDetalle(detalle: detallepro){
    return this.http.post(`${this.API_URIDetalle}`,detalle)
  }
  
}