import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MenuItem, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  
  address : string;
  nombre: string ;
  apellido: string;
  email: string;
  usuario: string;
  emailVerificado: boolean;


  poolData = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId, 
  };

  public listaProductos:any = [];

  selectedProduct: any;

  attributes:CognitoUserAttribute[];


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
              //this.getAttributes();
              this.router.navigate(['/perfil'])
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

    this.getAttributes();
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
      this.router.navigate(['/home']);
    }else{
      alert('No hay usuario logueado');
      this.router.navigate(['/login']);
    }
  }

  getAttributes():void{

    let i:number;
    var userPool = new CognitoUserPool(this.poolData);
    var cognitoCurrentUser = userPool.getCurrentUser();
    
    cognitoCurrentUser.getSession((err: any, session : any) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      cognitoCurrentUser.getUserAttributes((err, result) =>{
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }

         this.attributes = result;


        for(  i  =  0 ;  i  <  this.attributes . length ;  i ++ ){
          if(this.attributes[i].getName () != 'sub'){
            
            switch(this.attributes[i].getName()){

              case 'address' : 
              this.address= this.attributes[i]. getValue();
                break;
              
              case 'name' : 
                this.nombre = this.attributes[i].getValue();
                  break;
              
              case 'nickname':
                this.usuario = this.attributes[i].getValue();
                  break;
                
              case 'family_name' :
                this.apellido = this.attributes[i].getValue();
                  break;
              
              case 'email_verified':
                this.emailVerificado = true;
                  break;

              case 'email':
                  this.email = this.attributes[i].getValue();
                    break;

            }
            
            
            
            //this.attributes.forEach((Attr : CognitoUserAttribute) => console.log(Attr.Name + ' = ' + Attr.Value));
            console .log ( 
             this.attributes [ i ] . getName ( )  +  '= '  + this.attributes [ i ] . getValue ( ) 
             ) ; 

          }
        }
       
        
      });
    });


  }
  
}
