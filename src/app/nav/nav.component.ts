import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
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

  userCurrent:Boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
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
      this.router.navigate(['/login']);
    }else{
      alert('No hay usuario logueado');
      this.router.navigate(['/login']);
    }
  }
}
