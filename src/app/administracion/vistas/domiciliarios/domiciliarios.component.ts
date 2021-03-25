import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDomiciliarioComponent } from './form-domiciliario/form-domiciliario.component';

@Component({
  selector: 'app-domiciliarios',
  templateUrl: './domiciliarios.component.html',
  styleUrls: ['./domiciliarios.component.css']
})
export class DomiciliariosComponent implements OnInit {

  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'nombre',columna: 'Nombre'},
    {indice: 'apellido',columna: 'Apellido'},
    {indice:'identificacion',columna:'Identificacion'},
    {indice:'salario',columna:'Salario'},
]
  productos: any = [
    {
      indice: 1,
      apellido: 'Gutierrez',
      nombre: 'Juan',
      identificacion: '1000323233',
      salario: '$ 1100000',
    },{
      indice: 2,
      apellido: 'Suarez',
      nombre: 'Luis',
      identificacion: '100039973',
      salario: '$ 1100000',
    }
    
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showRegistrarProducto(){
    const dialogRef = this.dialog.open(FormDomiciliarioComponent,{
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
