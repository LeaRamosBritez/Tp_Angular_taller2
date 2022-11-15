import { Injectable } from '@angular/core';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth():boolean{
    var isAuth = false;
    var poolData = {
      UserPoolId: "us-east-1_mAolZ5VrD",
      ClientId: "2agsnegmb1t54jjnvofdsk4n2l"
    };

    var userPool = new CognitoUserPool(poolData);
    var cognitoCurrentUser = userPool.getCurrentUser();

    if(cognitoCurrentUser != null){

      cognitoCurrentUser.getSession((err: any, session : any) => {
        if (err) {
          alert(err.message || JSON.stringify(err));
        }
        isAuth = session.isValid();
      });

    }
    
    return isAuth;
  }
}
