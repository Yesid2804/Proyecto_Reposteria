import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-quejas-yreclamos',
  templateUrl: './tabla-quejas-yreclamos.component.html',
  styleUrls: ['./tabla-quejas-yreclamos.component.css']
})
export class TablaQuejasYReclamosComponent implements OnInit {
  @Output() showModal = new EventEmitter<boolean>();

  @Input()
  titulo = ""

  
  @Input()
  nombreBotonAgregar = ""

  @Input()
  data: any = []

  @Input()
  columns: any[] = [] 
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(
  ): void {
  }

  openDialog() {
    this.showModal.emit(true);
  }

}
