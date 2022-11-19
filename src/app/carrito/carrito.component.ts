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
  public total=0;
  subtotal=0;
  alertSwitch:boolean;

  ngOnInit(): void {
    this.servicioCarrito.disparadorCarrito.subscribe(data =>{
      
      console.log('recibiendo data... '+ data.data.id);

      const idProductoEntrante = data.data.id;
      if (!this.listaProductosEnCarrito.find(p => p.data.id === idProductoEntrante)){
        this.listaProductosEnCarrito.push(data);
        console.log(data.cantidad * data.data.precio );
        console.log(this.listaProductosEnCarrito.length)
        this.subtotal = data.cantidad * data.data.precio;
        this.total=this.total + this.subtotal;
        console.log(this.total);
      } 
     
    })
  }

 

  eliminarDelCarrito(index:any){

    let precioAborrar = this.listaProductosEnCarrito[index].data.precio*this.listaProductosEnCarrito[index].cantidad;
    console.log(precioAborrar);
    this.total = this.total - precioAborrar;
    console.log(this.total);
    this.listaProductosEnCarrito.splice(index, 1);
  }

  comprar(data:any){

    //Se busca identificador de usuario en localstorage
    let usuarioJson:any = localStorage.getItem('usuarioActual');
    let usuarioJsonD = JSON.parse(usuarioJson); 
    let usuario = usuarioJsonD[0].id; 
    let usuarioId =  usuario;

    //Ubicamos al final del array el ID del usuario para enviarlo al back
    let dataLength = data.length;
    data[dataLength]={usuarioId: usuarioId};

    console.log(data);
    this.RestService.post('http://localhost:3050/comprar', data)
    .subscribe(respuesta => {
      console.log(respuesta);
    });
    console.log("Total: ", this.total)
    this.listaProductosEnCarrito = [];
    this.alertSwitch = true;
    this.total=0;

  }

  cerrarAlert(){
    this.alertSwitch = false;
  }

}
