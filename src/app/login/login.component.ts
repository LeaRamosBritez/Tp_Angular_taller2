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
    
    this.guardarUsuarioAlLocalStorage(this.email);

    console.log('se logeo el usuario se logeo el usuario');
    this.router.navigate(['/home']);


    setTimeout(function(){
      window.location.reload();
   },1000);
  }
  guardarUsuarioAlLocalStorage(email : String){
    this.usuarioService.obtenerUsuarioPorEmail(email).subscribe((data: Iuser) => {
      localStorage.setItem('usuarioActual', JSON.stringify(data));
      this.cookies.set('usuarioActual', JSON.stringify(data));
      alert('Usuario guardado en el local storage');
    });

  }
}


