import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  guardarUsuarioEnBBDD(usuario: Iuser): any {
    return this.httpClient.post(`${this.baseUrl}/guardarUsuarioEnBBDD`, usuario);
  }

  loginUsuario(usuario: Iuser): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, usuario,{ observe: 'events' }).pipe(tap(
      (res: any) => {
        return res;
      }));
  }

  usuarioActual(): Observable<Iuser>{
    return this.httpClient.get<Iuser>(`${this.baseUrl}/usuarioActual`);
  }

  obtenerUsuarioPorEmail(mail:String): Observable<Iuser>{
    return this.httpClient.get<Iuser>(`${this.baseUrl}/obtenerUsuarioPorEmail/${mail}`);
  }

  logout(): any {
    return this.httpClient.post(`${this.baseUrl}/logout`,null);
  }

}
