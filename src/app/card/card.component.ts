import { Component, OnInit, Input } from '@angular/core';
import { Galleria } from '../models/Galleria';
import { GalleriaService } from '../services/galleria.service';
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
  imagenesCarrousel!: Galleria[];
  
  constructor(private servicioCarrito:ServicioCarritoService, private galleriaService:GalleriaService) { }
 
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];


  ngOnInit(): void {
    this.galleriaService.getImages().then(data => {
      this.imagenesCarrousel = data;
    });
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
