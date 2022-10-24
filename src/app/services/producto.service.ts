import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private baseUrl = 'http://localhost:3050';

  constructor(private httpClient: HttpClient) { }

  altaProducto(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.baseUrl}/crearProducto`, producto);
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos`);
  }
 
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.baseUrl}/producto/${id}`);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(`${this.baseUrl}/actualizarProducto/${id}`, producto);
  }

  borrarProducto(id: number): Observable<Producto> {
    return this.httpClient.delete<Producto>(`${this.baseUrl}/borrarProducto/${id}`);
  }

  ultimoProducto(): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.baseUrl}/ultimoProducto`);
  }
}
