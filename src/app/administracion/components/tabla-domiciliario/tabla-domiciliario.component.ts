import { ArrayType } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tabla-domiciliario' ,
  templateUrl: './tabla-domiciliario.component.html',
  styleUrls: ['./tabla-domiciliario.component.css']
})

export class TablaDomiciliarioComponent implements OnInit {
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
