import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  numero : String = "hola";

  constructor() { }

  ngOnInit(): void {
   alert(this.numero)
  }

}
