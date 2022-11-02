import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor(private servicioCarrito:ServicioCarritoService, private RestService:RestService) { }
  selectedProduct: any;
  display: any;
  public listaProductosEnCarrito:Array<any> = [];

  alertSwitch:boolean;

  ngOnInit(): void {
    this.servicioCarrito.disparadorCarrito.subscribe(data =>{
      console.log('recibiendo data... '+ data);
      this.listaProductosEnCarrito.push(data);
    })
  }

  eliminarDelCarrito(index:any){

    this.listaProductosEnCarrito.splice(index, 1);
  }

  comprar(data:any){
    console.log(data);
    this.RestService.post('http://localhost:3050/comprar', data)
    .subscribe(respuesta => {
      console.log(respuesta);
    });

    this.listaProductosEnCarrito = [];
    this.alertSwitch = true;
  }

  cerrarAlert(){
    this.alertSwitch = false;
  }

}
