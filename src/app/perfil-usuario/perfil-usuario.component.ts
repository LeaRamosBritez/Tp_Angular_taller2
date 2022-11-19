import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent implements OnInit {
  address : string;
  nombre: string ;
  apellido: string;
  email: string;
  usuario: string;
  emailVerificado: boolean;
  attributes: any;

  constructor(private RestService:RestService, private router:Router) { }

  ngOnInit(): void {
    this.getAttributes();
    this.cargarDataCompras();
  }

  getAttributes():void{
    this.attributes = JSON.parse(localStorage.getItem('usuarioActual'));
    this.email=this.attributes[0]['email'];
    this.nombre=this.attributes[0]['name'];
    this.apellido=this.attributes[0]['family_name'];
    this.address=this.attributes[0]['address'];
    this.usuario=this.attributes[0]['nickname'];
    this.emailVerificado=true;
  }

  public listaComprasUsuario:any = [];
  public listaProductosCompra:any = [];

  public cargarDataCompras(){
    //Se busca identificador de usuario en localstorage
    let usuarioJson:any = localStorage.getItem('usuarioActual');
    let usuarioJsonD = JSON.parse(usuarioJson); 
    let usuario = usuarioJsonD[0].id; 
    let usuarioId =  usuario;

    this.RestService.get(`http://localhost:3050/compras/${usuarioId}`)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.listaComprasUsuario = respuesta;
    });
  }

  public traerProductosCompra(idCompra:any){
    this.RestService.get(`http://localhost:3050/compraProductos/${idCompra}`)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.listaProductosCompra = respuesta;
      console.log(this.listaProductosCompra);
      alert(JSON.stringify(respuesta));
    });
  }

}
