import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../models/iuser';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';
import { Message } from 'primeng/api';
import { UsuarioService } from '../services/usuario.service';
import { NavComponent } from '../nav/nav.component';
import { finalize, take, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  msgs1: Message[];

  email: string;
  password: string;
  usuarioLogueado: Iuser;

  constructor(private router: Router,private usuarioService:UsuarioService,private cookies: CookieService) { }

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

    this.usuarioService.loginUsuario(iuser).subscribe(() => {
      alert('Usuario logueado correctamente');
    });
   
    this.usuarioService.usuarioActual().pipe(
      take(1),
      finalize(() => this.router.navigate(['/home']))
    ).subscribe((data: Iuser) => { localStorage.setItem('usuarioActual', JSON.stringify(data)); });

  }
  guardarUsuario(){
    this.usuarioService.usuarioActual().subscribe((data: Iuser) => {
      localStorage.setItem('usuarioActual', JSON.stringify(data));
      this.cookies.set('usuarioActual', JSON.stringify(data));
    });
  }
}


