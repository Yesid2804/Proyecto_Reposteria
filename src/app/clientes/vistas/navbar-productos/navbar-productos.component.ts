import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { ActivarCarouselService } from 'app/clientes/servicios/activar-carousel.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import {CarouselProductosComponent} from '../carousel-productos/carousel-productos.component';

@Component({
  selector: 'app-navbar-productos',
  templateUrl: './navbar-productos.component.html',
  styleUrls: ['./navbar-productos.component.css']
})
export class NavbarProductosComponent implements OnInit {

  @Input() categoria: CarouselProductosComponent;
  opcionSeleccionada: string = '0';

  texto: string =  "SI";
  estadoPositivo: boolean = true;

  constructor(private activarCAtegoria: ActivarCarouselService) { }

  categoriaActiva: any;
  public categorias = [] as boolean[];

  ngOnInit(): void {
  }
  
  activarCarousel(id){
     this.activarCAtegoria.disparadorDeCategoria.emit(id); 

    //  if (id==this.categoriaActiva) {
    //    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    //    this.estadoPositivo = !this.estadoPositivo; 
    //  }
    }
  
}
 