import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../models/iuser';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { Message } from 'primeng/api';
import { UsuarioService } from '../services/usuario.service';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msgs1: Message[];

  email: string;
  password: string;
  usuarioLogueado: Iuser;

  constructor(private router: Router,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.msgs1 = [
      {severity:'success', summary:'Success', detail:'Message Content'},
  ];
  }

  onLogin(): void{
    var iuser: Iuser = {
      email: this.email,
      name: null,
      family_name: null,
      address: null,
      nickname: null,
      pass: this.password
    }

    this.usuarioService.loginUsuario(iuser).subscribe( (dato: Iuser) => {});

    this.usuarioService.usuarioActual().subscribe((dato: Iuser) => {
        /*localStorage.setItem('usuario', JSON.stringify(dato)); 
        environment.currentUser=true;*/
        this.usuarioLogueado = dato;

    });

   alert(this.usuarioLogueado);
   
    //this.router.navigate(['/home']);
  }
}
