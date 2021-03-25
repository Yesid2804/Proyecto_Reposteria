import { ArrayType } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Output() showModal = new EventEmitter<boolean>();
  @Output() showModalEditar = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();

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
  modalEditar(item) {
    this.showModalEditar.emit(item);
  }
  remove(item) {
    this.eliminar.emit(item);
  }

}
