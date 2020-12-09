import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaService } from '../../service/categoria.service';
import {CategoriaModel} from '../../models/categoria';
import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: true,
  timer: 5000
});

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Output() salida = new EventEmitter();
  categoria: CategoriaModel = new CategoriaModel(); 
  tabla: any = [];
  idcategoriaEliminar: string;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService
      .obtenerCategoria()
      .then((data: any) => {
        this.tabla = data.categorias;
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('No se pudo obtener las categorias');
      });
  }

  registrar (forma: NgForm) {
    this.categoriaService.registarCategoria(this.categoria).then((categoria: any) => {
      Toast.fire(categoria.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.console.error.msg, '', 'error');
    });
  }

 actualizar (actu: NgForm) {
    this.categoriaService.actualizarCategoria(this.categoria.id ,this.categoria).then((categoria: any) => {
      Toast.fire(categoria.msg, '', 'success');
      actu.reset();
      this.salida.emit();
    }).catch((err: any) => { 
      Toast.fire(err.console.error.msg, '', 'error');
    });
  } 

  elimiar(idcategoriaEliminar: string) {
    this.idcategoriaEliminar = idcategoriaEliminar;
    console.log(idcategoriaEliminar);
    this.categoriaService
      .eliminarCategoria(idcategoriaEliminar)
      .then((usuario: any) => {
        Toast.fire(usuario.msg, '', 'success');
        this.salida.emit();
      })
      .catch((err: any) => {
        Toast.fire(err.console.error.msg, '', 'error');
      });
  }
}
