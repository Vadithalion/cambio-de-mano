import { Component, OnInit } from '@angular/core';


import { ProductosService } from './../../services/productos/productos.service';
import { UsuariosService } from './../../services/usuarios/usuarios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 productos: any = [];
 usuarios: any = []
image = 'http://www.starwarshelmets.com/2009/Altmann_X-Wing_icon.jpg';

  constructor(public productosService: ProductosService, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getUsuarios();
  }

  getProductos() {
    this.productosService.getAllProductos()
    .subscribe(
    allProducts => {
        this.productos = allProducts;
       }
    );
  }
  getUsuarios() {
    this.usuariosService.getAllUsuarios()
    .subscribe(
    allUsers => {
        this.usuarios = allUsers;
       }
    );
  }

  }

