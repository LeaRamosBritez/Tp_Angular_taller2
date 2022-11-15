import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { UsuarioService } from '../services/usuario.service';

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

  constructor(private router:Router, private usuarioService:UsuarioService ) { }

  ngOnInit(): void {
  }

  onRegistrer(): void{
    var iuser: Iuser = {
      email: this.email,
      name: this.name,
      family_name: this.family_name,
      address: this.address,
      nickname: this.nickname,
      pass: this.password
    }

    this.usuarioService.registrarUsuario(iuser).subscribe((dato: Iuser) => {
      if(dato){
        alert("Usuario registrado correctamente. Verifique su correo para activar su cuenta.");
        this.router.navigate(['/login']);
      }
    });
  }
}
