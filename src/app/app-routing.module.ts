import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';


const routes: Routes = [
  {path: 'acercade', component: AcercadeComponent },
  {path: 'productos', component: ProductosComponent },
  {path: 'categoria', component: CategoriaComponent},
  {path: 'usuarios', component: UsuariosComponent },
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
