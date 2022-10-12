import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { MenuItem, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  poolData = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId, 
  };

  public listaProductos:any = [];

  selectedProduct: any;
  display: any;
  userCurrent:Boolean = false;
  items: MenuItem[];



  constructor(private router:Router) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Optiones',
      items: [{
          label: 'Perfil',
          icon: 'pi pi-user',
          command: () => {
              
          }
      },
      {
          label: 'Configuración',
          icon: 'pi pi-cog',
          command: () => {
            
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


    this.getUserCurrentUser();
  }


  getUserCurrentUser():void {
    var userPool = new CognitoUserPool(this.poolData);
    var cognitoCurrentUser = userPool.getCurrentUser();
    if (cognitoCurrentUser != null) {
      this.userCurrent = true;
      console.log('Usuario logueado: '+ this.userCurrent);
    }else{
      this.userCurrent = false;
      console.log('Usuario logueado: '+ this.userCurrent);
    }

  }

  logout(): void{
    var userPool = new CognitoUserPool(this.poolData);
    var cognitoCurrentUser = userPool.getCurrentUser();
    if (cognitoCurrentUser != null) {
      cognitoCurrentUser.signOut();
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }else{
      alert('No hay usuario logueado');
      this.router.navigate(['/login']);
    }
  }
}
