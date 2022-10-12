import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RestService } from '../rest.service';
=======
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { environment } from 'src/environments/environment';
>>>>>>> 2b2c49248d4bc3fd7e11c93bb3b065fef1b979ec

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayBasic2: boolean;
  attributeList: CognitoUserAttribute[];
  visibleSidebar5: any;
  userCurrent:Boolean = false;

<<<<<<< HEAD
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
=======
  poolData = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId, 
  };
  
  constructor(private router: Router) { }

  ngOnInit(): void {

>>>>>>> 2b2c49248d4bc3fd7e11c93bb3b065fef1b979ec
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
}

  getAttributesCurretUser(): void {
    var userPool = new CognitoUserPool(this.poolData);
    var cognitoCurrentUser = userPool.getCurrentUser();

    if (cognitoCurrentUser != null) {

      //Primero se verifica la session 
      cognitoCurrentUser.getSession((err:any, session:any) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        console.log('session Validada: ' + session.isValid());

        //Segundo se verifica los atributos del usuario
        cognitoCurrentUser.getUserAttributes((err, attributes) => {
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          }

          this.attributeList = attributes;

          this.attributeList.forEach((attribute) => console.log(attribute.getName() + ' =' + attribute.getValue()));
          
        });
      });
    }
  }
}
