import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Iuser } from '../models/iuser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  attributeList: CognitoUserAttribute[];
  visibleSidebar5: any;
  userCurrent:Boolean;


  constructor(private RestService:RestService,private router: Router) { }

  public listaProductos:any = [];

  ngOnInit(): void {
    
    this.cargarData();
    this.listaProductos= [
      {
        id:1,
        codigo:1,
        nombre:'Queso',
        precio: '300',
        imagen:'queso.jpg'
      },
      {
        id:2,
        codigo:2,
        nombre:'Fideos',
        precio: '120',
        imagen:'fideos.png'
      },
      {
        id:3,
        codigo:3,
        nombre:'Arroz',
        precio: '90',
        imagen:'arroz.png'
      }
    ]
  }

  public cargarData(){
    this.RestService.get('http://localhost:3050/productos')
    .subscribe(respuesta => {
      console.log(respuesta);

      this.listaProductos = respuesta;
    });
  }


}
