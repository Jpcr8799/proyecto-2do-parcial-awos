import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UsuariosService { 
  url = `https://equipo3-4b-2do-parcial-awos.herokuapp.com`;

  constructor(private http: HttpClient) { }
  
  obtenerUsuarios(){
    return this.http.get(`${this.url}/usuario`).toPromise();
  }

  registarUsuario( usuario: UsuarioModel) {
    return this.http.post(`${this.url}/usuario`, usuario).toPromise();
  }

 actualizarUsuario(id: string, usuario: UsuarioModel) {
  return this.http.put(`${this.url}/usuario/${id}`, usuario).toPromise();
 }
  
 eliminarUsuario(id: string) {
  return this.http.delete(`${this.url}/usuario/${id}`).toPromise();
 }

}
