import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NavegarUsuario(){
    this.router.navigate(['/usuarios']);
  }
  NavegarCategoria(){
    this.router.navigate(['/categoria']);
  }
  NavegarProducto(){
    this.router.navigate(['/productos']);
  }
  NavegarAcercade(){
    this.router.navigate(['/acercade']);
  }

}
