import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MenuItem, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  userlogueado: Iuser;
  
  address : string;
  nombre: string ;
  apellido: string;
  email: string;
  usuario: string;
  emailVerificado: boolean;
  local: any = []
  listaProductos:any = [];
  selectedProduct: any;
  display: any;
  userCurrent:Boolean;
  items: MenuItem[];

  constructor(private router:Router,private usuarioService:UsuarioService) { }

  ngOnInit(): void {

    this.local=JSON.parse(localStorage.getItem('usuario')); 
    if(this.local != null && this.local != undefined){
      environment.currentUser = true;
      this.userCurrent=environment.currentUser;
      this.address = this.local.address;
      this.nombre = this.local.name;
      this.apellido = this.local.family_name;
      this.email = this.local.email;
      this.usuario = this.local.nickname;
      this.emailVerificado = this.local.email_verified;
    }else{
      environment.currentUser = false;
      this.userCurrent=environment.currentUser;
    }


    this.items = [{
      label: 'Optiones',
      items: [{
          label: 'Perfil',
          icon: 'pi pi-user',
          command: () => {
              this.router.navigate(['/perfil'])
          }
      },
      {
          label: 'Configuración',
          icon: 'pi pi-cog',
          command: () => {
            
          }
      },
      {
          label: 'Administrador',
          icon: 'fa-regular fa-star',
          command: () => {
            this.router.navigate(['/administrador'])
          }
      }
      ]},
      {
          label: 'Navegación',
          items: [{
              label: 'Sign out',
              icon: 'pi pi-sign-out',
              command: () => {
                this.logout();
                
              }
          }
      ]}
  ];

  this.listaProductos= [
    {
      nombre:'Queso',
      precio: '300',
      imagen:'queso.jpg'
    },
    {
      nombre:'Fideos',
      precio: '120',
      imagen:'fideos.png'
    },
    {
      nombre:'Arroz',
      precio: '90',
      imagen:'arroz.png'
    },    {
      nombre:'Queso',
      precio: '300',
      imagen:'queso.jpg'
    },
    {
      nombre:'Fideos',
      precio: '120',
      imagen:'fideos.png'
    },
    {
      nombre:'Arroz',
      precio: '90',
      imagen:'arroz.png'
    }
  ]

  }

  logout(): void{
    localStorage.removeItem('usuario');
    localStorage.clear();
    environment.currentUser = false;
    this.userCurrent=environment.currentUser;
    this.usuarioService.logout().subscribe( (resp:any)=>{
    });
    this.router.navigate(['/login']);
  }

  
}
