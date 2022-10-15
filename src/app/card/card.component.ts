import { Component, OnInit, Input } from '@angular/core';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image:string;
  displayBasic2: boolean;
  
  constructor(private servicioCarrito:ServicioCarritoService) { }
 
  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354';
  }

  agregarACarrito(){
    //console.log(this.dataEntrante);
    this.servicioCarrito.disparadorCarrito.emit({
      data: this.dataEntrante
    });
  }
  
  showBasicDialog2(){
    this.displayBasic2 = true;
    }
}
