import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../models/iuser';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgs1: Message[];

  email: string;
  password: string;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'},
  ];
  }

  onLogin(): void{

        //datos de grupo (pool)
        var poolData = {
          UserPoolId: environment.UserPoolId, // Your user pool id here
          ClientId: environment.ClientId, // Your client id here
        };
    
        var userPool = new CognitoUserPool(poolData);
    
        // datos del user
        var userData = {
          Username: this.email,
          Pool: userPool,
        };
    
        var cognitoUser = new CognitoUser(userData);
        // credenciales
        var authenticationData = {
          Username: this.email,
          Password: this.password,
        };
    
        var authenticationDetails = new AuthenticationDetails(authenticationData);
    
        //login
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: (result) => {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            this.router.navigate(['/home']);
          },
    
          onFailure: (err) => {
            alert(err.message || JSON.stringify(err));

            this.router.navigate(['/signup']);
          }
        },);
  }
}
