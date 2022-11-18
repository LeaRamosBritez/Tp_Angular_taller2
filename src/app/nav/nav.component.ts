import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { CookieService } from 'ngx-cookie-service';
import { MenuItem, MessageService } from 'primeng/api';
import { finalize, tap } from 'rxjs';
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
  userCurrent:Boolean;

  address : string;
  nombre: string ;
  apellido: string;
  email: string;
  usuario: string;
  emailVerificado: boolean;
   aValue:any;
  local: any = []
  listaProductos:any = [];
  selectedProduct: any;
  display: any;
  
  items: MenuItem[];

  constructor(private router:Router,private usuarioService:UsuarioService, private cookie:CookieService) { }

  ngOnInit(): void {

    if(localStorage.getItem('usuarioActual') != null){
      this.aValue = JSON.parse(localStorage.getItem('usuarioActual'));
      this.email=this.aValue[0]['email'];
      this.nombre=this.aValue[0]['name'];
      this.apellido=this.aValue[0]['family_name'];
      this.address=this.aValue[0]['address'];
      this.usuario=this.aValue[0]['nickname'];
      this.emailVerificado=this.aValue[0]['email_verified'];
      this.userCurrent = true;
      //console.log(aValue);
     // this.email = aValue['email'];
    }

    /*
    this.usuarioService.usuarioActual().pipe( tap( (response) => {
      this.userCurrent = true;
      this.email = response.email;
      this.nombre = response.name;
      this.apellido = response.family_name;
      this.usuario = response.nickname;
      this.address = response.address;
      this.emailVerificado = true;
    })).subscribe((data: Iuser) => {
      this.router.navigate(['/home']);
    });*/


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

    this.usuarioService.logout().pipe(finalize(() => {
      this.userCurrent = false;
      localStorage.removeItem('usuarioActual');
      localStorage.clear();
      this.cookie.deleteAll();
      this.router.navigate(['/login']);
    })).subscribe( (resp:any)=>{
    }); 
  }

  guardarUsuario(){
    this.usuarioService.usuarioActual().subscribe((data: Iuser) => {
      localStorage.setItem('usuarioActual', JSON.stringify(data));
    });
  }
}
