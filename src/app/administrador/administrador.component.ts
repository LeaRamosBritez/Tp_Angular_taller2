import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
  providers: [MessageService, ConfirmationService]

})
export class AdministradorComponent implements OnInit {

  listaProductos: Producto[] = [];
  diagoloProducto: boolean;
  producto: Producto;
  productosSeleccionados: Producto[];
  submitted: boolean;
  statuses: any[];
  idMax: number;
  ulimoProducto:Producto;
  src: string = 'https://ardiaprod.vtexassets.com/arquivos/ids/190941';
  selectedCategory: String = null;

  constructor(private productoService: ProductoService, private messageService: MessageService, private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.obtenerListaDeProductos();
    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  }

  openNew() {
    this.producto = {};
    this.submitted = false;
    this.diagoloProducto = true;
  }


  editProduct(producto: Producto) {
    this.producto = { ...producto };
    this.diagoloProducto = true;
  }

  deleteSelectedProducts() {
    /* this.confirmationService.confirm({
         message: 'Are you sure you want to delete the selected products?',
         header: 'Confirm',
         icon: 'pi pi-exclamation-triangle',
         accept: () => {
             this.products = this.products.filter(val => !this.selectedProducts.includes(val));
             this.selectedProducts = null;
             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
         }
     });*/
  }


  hideDialog() {
    this.diagoloProducto = false;
    this.submitted = false;
  }

  obtenerListaDeProductos() {
    this.productoService.obtenerProductos().subscribe((dato: Producto[]) => {
      this.listaProductos = dato;
    }
    )
  }

  borrarProducto(producto: Producto) {
    this.confirmationService.confirm({
      message: '¿Estas seguro que quieres borrar este producto con ID: '+producto.id+'?' ,
      header: 'Confirmar',
      icon: 'pi pi-info-circle',
      accept: () => {  
        this.productoService.borrarProducto(producto.id).subscribe((dato: Producto) => {
        })  
        
        this.listaProductos = this.listaProductos.filter(val => val.id !== producto.id); 
        this.producto = {};
        this.messageService.add({ severity: 'error', summary: 'Confirmado', detail: 'Producto Borrado' }); 
      }

      
    });


  }


  saveProduct() {
    this.submitted = true;

    if (this.producto.nombre.trim()) {
      if (this.producto.id) {
        if (this.producto.clasificacion != null
          && this.producto.descripcion != null
          && this.producto.nombre != null
          && this.producto.precio != null) {
          this.listaProductos[this.findIndexById(this.producto.id.valueOf())] = this.producto;
          this.productoService.actualizarProducto(this.producto.id, this.producto).subscribe((dato: Producto) => {

          }, error => console.log(error));
        }
        this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Producto Actualizado', life: 3000 });
      }
      else {
        
        this.productoService.ultimoProducto().subscribe((dato: Producto) => {
          this.ulimoProducto=dato;
         });

        //let idMax = this.ulimoProducto.id.valueOf();

        //this.producto.id=this.idMax.valueOf()+1;
        this.producto.img = 'https://ardiaprod.vtexassets.com/arquivos/ids/190941';
        this.listaProductos.push(this.producto);
        this.productoService.altaProducto(this.producto).subscribe((dato: Producto) => {
        }, error => console.log(error));
        this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Producto Creado' });
      }
      this.listaProductos = [...this.listaProductos];
      this.diagoloProducto = false;
      this.producto = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.listaProductos[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createId(): Number {
    let id = '';
    let numero;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    numero = Number(id);
    return numero;
  }
}
