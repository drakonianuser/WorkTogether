import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {project} from '../models/project'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  API_URIProject = 'http://localhost:3000/projects/api';
  API_URICategoria = 'http://localhost:3000/categoria/api';
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
}