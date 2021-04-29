import { Component, OnInit } from '@angular/core';
import { ActivarCarouselService } from 'app/clientes/servicios/activar-carousel.service';
import {InicioComponent} from '../inicio/inicio.component';

@Component({
  selector: 'app-carousel-productos',
  templateUrl: './carousel-productos.component.html',
  styleUrls: ['./carousel-productos.component.css']
})
export class CarouselProductosComponent implements OnInit {

  constructor(private activarCAtegoria: ActivarCarouselService) { }
  
  activarCarousel: any=1;
  numCategoria: any=1;
  
  ngOnInit(): void {
    console.log(this.activarCAtegoria.disparadorDeCategoria.subscribe(data =>{
      this.activarCarousel = data;
    }));
  }
  
}
