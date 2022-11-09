import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:3050';

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(usuario: Iuser): any {
    return this.httpClient.post(`${this.baseUrl}/registrarUsuario`, usuario);
  }

  loginUsuario(usuario: Iuser): any {
    return this.httpClient.post(`${this.baseUrl}/login`, usuario);
  }

  usuarioActual(): Observable<Iuser>{
    return this.httpClient.get<Iuser>(`${this.baseUrl}/usuarioActual`);
  }

  logout(): any {
    return this.httpClient.post(`${this.baseUrl}/logout`,null);
  }
}
