import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Output() categoriaClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
