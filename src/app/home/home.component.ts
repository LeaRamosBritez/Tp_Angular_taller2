import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private RestService:RestService) { }

  public listaProductos:any = [];

  ngOnInit(): void {
    this.cargarData();

    this.listaProductos= [
      {
        nombre:'Queso',
        precio: '300'
      },
      {
        nombre:'Fideos',
        precio: '120'
      },
      {
        nombre:'Arroz',
        precio: '90'
      }
    ]
  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/productos')
    .subscribe(respuesta => {
      console.log(respuesta);

      this.listaProductos = respuesta;
    });
  }

}
