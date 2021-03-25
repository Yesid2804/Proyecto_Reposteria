import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'cliente',columna: 'Cliente'},
    {indice: 'compra',columna: 'Compra'},
    {indice:'fecha',columna:'Fecha'},
    {indice:'descripcion',columna:'DescripcionCompra'},
]
  productos: any = [
    {
      indice: 1,
      cliente: 'jose Hernandez',
      compra: '$160000',
      fecha:'26/03/2020',
      descripcion: '',
    },
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
