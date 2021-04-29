import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivarCarouselService {

  @Output() disparadorDeCategoria: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
