import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  @Output() disparadorCarrito: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
