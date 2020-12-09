import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import {ProductoModel} from '../../models/producto';
import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: true,
  timer: 5000
});

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Output() salida = new EventEmitter();
  producto: ProductoModel = new ProductoModel(); 
  tabla: any = [];
  idproducto: string; 

  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.productoService
      .obtenerProducto()
      .then((data: any) => {
        this.tabla = data.productos;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('No se pudo obtener los productos');
      });
  }

  registrar (forma: NgForm) {
    this.productoService.registarProducto(this.producto).then((producto: any) => {
      Toast.fire(producto.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.console.error.msg, '', 'error');
    });
  }

 actualizar (actu: NgForm) {
    this.productoService.actualizarProducto(this.producto.id ,this.producto).then((producto: any) => {
      Toast.fire(producto.msg, '', 'success');
      actu.reset();
      this.salida.emit();
    }).catch((err: any) => { 
      Toast.fire(err.console.error.msg, '', 'error');
    });
  } 


  elimiar(idProducto: string) {
    this.idproducto = idProducto;
    console.log(idProducto);
    this.productoService
      .eliminarProducto(idProducto)
      .then((usuario: any) => {
        Toast.fire(usuario.msg, '', 'success');
        this.salida.emit();
      })
      .catch((err: any) => {
        Toast.fire(err.console.error.msg, '', 'error');
      });
  }
}