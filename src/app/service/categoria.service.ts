import { Injectable } from '@angular/core';
import { CategoriaModel } from '../models/categoria'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = `https://equipo3-4b-2do-parcial-awos.herokuapp.com`;

  constructor(private http: HttpClient) { }

  obtenerCategoria(){
    return this.http.get(`${this.url}/categoria`).toPromise();
  }

  registarCategoria( categoria: CategoriaModel) {
    return this.http.post(`${this.url}/categoria`, categoria).toPromise();
  }

 actualizarCategoria(id: string, categoria: CategoriaModel) {
  return this.http.put(`${this.url}/categoria/${id}`, categoria).toPromise();
 }
  
 eliminarCategoria(id: string) {
  return this.http.delete(`${this.url}/categoria/${id}`).toPromise();
 }

}





  




  
  