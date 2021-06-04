import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormClientesComponent } from 'app/administracion/components/vistas/clientes/form-clientes/form-clientes.component';
import { Venta } from 'app/administracion/models/venta';
import { FormVentasComponent } from './form-ventas/form-ventas.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'nombreCliente',columna: 'Nombre del Cliente'},
    {indice:'producto',columna:'Producto'},
    {indice:'precio',columna:'Precio'},
    {indice:'cantidad',columna:'Cantidad'},
]

public listVenta: Venta[] = [];

  productos: any = [
    {
      indice: 1,
      nombre: 'Jose',
      categoria: 'Bebidas',
      apellido: 'Hernandez',
      identificacion: '102454534',
      ubicacion: 'calle 64 #1-34',
      email:'josesedefegesf@gmail.com',

    }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showRegistrarVenta(){
    const dialogRef = this.dialog.open(FormVentasComponent,{
      width: '700px',
      data: {
        tipo: 'Agregar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
