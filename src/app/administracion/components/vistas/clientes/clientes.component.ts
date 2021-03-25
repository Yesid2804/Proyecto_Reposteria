import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Button } from 'selenium-webdriver';
import { FormClientesComponent } from './form-clientes/form-clientes.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'nombre',columna: 'Nombre'},
    {indice:'apellido',columna:'Apellido'},
    {indice:'identificacion',columna:'Identificacion'},
    {indice:'ubicacion',columna:'ubicacion'},
    {indice:'email',columna:'email'},


]
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

  showRegistrarProducto(){
    const dialogRef = this.dialog.open(FormClientesComponent,{
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
