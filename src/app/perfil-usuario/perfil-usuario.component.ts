import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getAttributes();
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

}
