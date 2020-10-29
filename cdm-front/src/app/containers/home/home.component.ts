import { Component, OnInit } from '@angular/core';

import { ProductosService } from './../../services/productos/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 productos: any = [];
image = 'http://www.starwarshelmets.com/2009/Altmann_X-Wing_icon.jpg';

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productosService.getAllProductos() // Este getAllFilms viene del servicio
    .subscribe(
    allProducts => {
        this.productos = allProducts;
       }
    );

    console.log(this.productos);
  }



  }

