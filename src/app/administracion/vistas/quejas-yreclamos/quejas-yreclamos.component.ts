import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quejas-yreclamos',
  templateUrl: './quejas-yreclamos.component.html',
  styleUrls: ['./quejas-yreclamos.component.css']
})
export class QuejasYReclamosComponent implements OnInit {

  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'cliente',columna: 'Cliente'},
    {indice:'fecha',columna:'Fecha'},
    {indice:'estado',columna:'Estado'},
    {indice:'descripcion',columna:'Descripcion de el reclamo'},
  ]
  productos: any = [
    {
      indice: 1,
      cliente: 'jose Hernandez',
      fecha:'26/03/2020',
      descripcion: '',
      estado: 'Pendiente',
    },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
