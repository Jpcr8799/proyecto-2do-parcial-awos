import { Injectable } from '@angular/core';
import { ProductoModel } from '../models/producto'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  url = `https://equipo3-4b-2do-parcial-awos.herokuapp.com`;
  
  constructor(private http: HttpClient) { }

  obtenerProducto(){
    return this.http.get(`${this.url}/productos`).toPromise();
  }

  registarProducto( producto: ProductoModel) {
    return this.http.post(`${this.url}/productos`, producto).toPromise();
  }

 actualizarProducto(id: string, producto: ProductoModel) {
  return this.http.put(`${this.url}/productos/${id}`, producto).toPromise();
 }
  
 eliminarProducto(id: string) {
  return this.http.delete(`${this.url}/productos/${id}`).toPromise();
 }

}





  