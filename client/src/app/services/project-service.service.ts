import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {project} from '../models/project'
import {detallepro} from '../models/detallepro'
import {detallepublicacion} from '../models/detallepublicacion'
import {documentacion} from '../models/documentacion'
import {imagen} from '../models/imagen'
import {publicacion} from '../models/publicacion'
import {reportes} from '../models/reportes'
import {user} from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  SERVERURL = 'http://localhost:3000/'
  API_URIProject = this.SERVERURL+'projects/api';
  API_URICategoria = this.SERVERURL+'categoria/api';
  API_URIDetalle = this.SERVERURL+'detallepro/api';
  API_URIDetallePubli = this.SERVERURL+'detallepu/api';
  API_URIDocumen = this.SERVERURL+'documentacion/api';
  API_URImagen = this.SERVERURL+'imagenes/api';
  API_URIPublicacion = this.SERVERURL+'publicaciones/api';
  API_URIReportes = this.SERVERURL+'reportes/api';
  API_URIUser = this.SERVERURL+'users/api';
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
    return this.http.get(`${this.API_URIDetalle}`);
  }
  getOneDetalle(id: String){
    return this.http.get(`${this.API_URIDetalle}/${id}`);
  }
  createDetalle(nombre: String,detalle: detallepro){
    return this.http.post(`${this.API_URIDetalle}/${nombre}`,detalle);
  }
  getOnedetalles(nombreProyecto: String){
    return this.http.get(`${this.API_URIDetalle}/${nombreProyecto}`);
  }
  
  //detallePublicación
  getListaDetallePublicacion(id: String){
    return this.http.get(`${this.API_URIDetallePubli}/${id}`);
  }
  getOneDetallePu(id: String, id2: String){
    return this.http.get(`${this.API_URIDetallePubli}/${id}/${id2}`)
  }
  createDetallePu(id: String,detallepu: detallepublicacion){
    return this.http.post(`${this.API_URIDetallePubli}/${id}`,detallepu);
  }
  updateDetallePu(id: String, detallepu: detallepublicacion){
    return this.http.put(`${this.API_URIDetallePubli}/${id}`,detallepu);
  }

  //Documentación
  getListaDocumentacion(id: String){
    return this.http.get(`${this.API_URIDocumen}/${id}`)
  }
  getOneDocumen(id: String){
    return this.http.get(`${this.API_URIDocumen}/${id}`) //revisar
  }
  createDocumen(id: String,documentacion: documentacion){
    return this.http.post(`${this.API_URIDocumen}/${id}`,documentacion);
  }
  updateDocumen(id: String, documentacion: documentacion){
    return this.http.put(`${this.API_URIDocumen}/${id}`,documentacion);
  }

  //Imagen
  getListaImagen(){
    return this.http.get(`${this.API_URImagen}`);
  }
  createImagen(imagen: imagen){
    return this.http.post(`${this.API_URImagen}`,imagen);
  }

  //publicacion
  getListaPublicacion(id: String){
    return this.http.get(`${this.API_URIPublicacion}/${id}`);
  }
  getOnePublicacion(idPublicacion: String, idProyecto){
    return this.http.get(`${this.API_URIPublicacion}/${idPublicacion}/${idProyecto}`);
  }
  createPublicacion(publicacion: publicacion){
    return this.http.post(`${this.API_URIPublicacion}`,publicacion);
  }

  //Reportes
  getListaReportes(){
    return this.http.get(`${this.API_URIReportes}`);
  }
  getOneReporte(id: String){
    return this.http.get(`${this.API_URIReportes}/${id}`);
  }
  createReporte(reportes: reportes){
    return this.http.post(`${this.API_URIReportes}`,reportes);
  }
  deleteReporte(id: String){
    return this.http.delete(`${this.API_URIReportes}/${id}`);
  }

  //Usuarios
  getOneUser(id: String){
    return this.http.get(`${this.API_URIUser}/${id}`);
  }
  updateUser(id: String, user: user){
    return this.http.put(`${this.API_URIUser}/${id}`, user);
  }
  getUserXCorreo(correo: String){
    return this.http.get(`${this.API_URIUser}/${correo}`);
  }

}
