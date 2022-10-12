import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  password: string;
  name: string;
  family_name: string;
  email: string;
  address:string;
  nickname: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onRegistrer(): void{
    var poolData = {
      UserPoolId: environment.UserPoolId,
      ClientId: environment.ClientId,
    };

    var userPool = new CognitoUserPool(poolData);

    var attributeList = [];

    var iuser: Iuser = {
      email: this.email,
      name: this.name,
      family_name: this.family_name,
      address: this.address,
      nickname: this.nickname
    }

    for (let key in iuser) {
      var attributeData = {
        Name: key,
        Value: iuser[key]
      }
      var attribute = new CognitoUserAttribute(attributeData);
      attributeList.push(attribute);
    }

    userPool.signUp(this.email, this.password, attributeList, [],(err, result)=> {
      if (err) {
        alert(err || JSON.stringify(err));
        return;
      }
      var cognitoUser = result.user;
      console.log(JSON.stringify(cognitoUser));
      alert('Correo enviado para acticar tu cuenta');
      this.router.navigate(['/login']);
    });


  }
}
