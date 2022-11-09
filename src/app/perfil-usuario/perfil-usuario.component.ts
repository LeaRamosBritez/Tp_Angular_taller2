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

  attributes:CognitoUserAttribute[];




  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getAttributes();
  }


  getAttributes():void{
  /*
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

    */
  }

}
