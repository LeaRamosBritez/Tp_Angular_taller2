import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';
import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { UsuarioService } from '../services/usuario.service';
import { finalize, tap } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class SignupComponent implements OnInit {
  password: string;
  name: string;
  family_name: string;
  email: string;
  address:string;
  nickname: string;
  mensaje:Boolean;
  constructor(private router:Router, private usuarioService:UsuarioService, private messageService: MessageService,private confirmationService: ConfirmationService ) { }

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

    this.usuarioService.registrarUsuario(iuser).pipe(
      finalize(() => {
        if(this.mensaje){
          this.usuarioService.guardarUsuarioEnBBDD(iuser).subscribe((data:any)=>{});
          this.messageService.add({severity:'success', summary: 'Registro', detail:"usuario guardado en la BBDD",life: 10000});
        }else{
          this.messageService.add({severity:'error', summary: 'Error2', detail:'Error al crear usuario',life: 10000});
        }
      })
    ).subscribe((data:any)=>{
      complete: {
        alert(data);
        if(data == "Usuario creado. Se envio un mail de confirmacion"){
          this.mensaje = true;
          alert("Estado: "+this.mensaje);
          this.messageService.add({severity:'success', summary: 'Registro', detail:data,life: 10000});
        }else{
          this.mensaje = false;
          alert("Estado: "+this.mensaje);
        }

      };
    });


    
    
  }

  
}
