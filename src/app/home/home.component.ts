import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { environment } from 'src/environments/environment';

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

  poolData = {
    UserPoolId: environment.UserPoolId,
    ClientId: environment.ClientId, 
  };
  
  constructor(private router: Router) { }

  ngOnInit(): void {

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
