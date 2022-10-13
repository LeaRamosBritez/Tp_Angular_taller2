import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private servicioCarrito:ServicioCarritoService) { }
  selectedProduct: any;
  display: any;
  public listaProductosEnCarrito:Array<any> = [];

  ngOnInit(): void {
    this.servicioCarrito.disparadorCarrito.subscribe(data =>{
      console.log('recibiendo data... '+ data);
      this.listaProductosEnCarrito.push(data);
    })
  }

  eliminarDelCarrito(index:any){

    this.listaProductosEnCarrito.splice(index, 1);
  }

}
