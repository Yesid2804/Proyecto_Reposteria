import { ArrayType } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-reportes',
  templateUrl: './tabla-reportes.component.html',
  styleUrls: ['./tabla-reportes.component.css']
})

export class TablaReportesComponent implements OnInit {
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
