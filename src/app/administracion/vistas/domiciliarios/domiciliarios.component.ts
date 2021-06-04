import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Domiciliario } from 'app/administracion/models/domiciliario';
import { DomiciliarioService } from 'app/administracion/servicios/domiciliario.service';
import Swal from 'sweetalert2';
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
 
listDomiciliario: Domiciliario[] = [
]

  constructor(
    public dialog: MatDialog,
    private _domiciliarioService: DomiciliarioService,
    ) { }

  ngOnInit(): void {
    this.actualizarDomiciliarios();
  }

  actualizarDomiciliarios(){
    this._domiciliarioService.getListDomiciliarios().subscribe((data) =>{
      this.listDomiciliario = data;
   }, error=>{
     console.log(error);
   })
  }

  showRegistrarDomiciliario(){
    const dialogRef = this.dialog.open(FormDomiciliarioComponent,{
      width: '700px',
      data: {
        tipo: 'Agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarDomiciliarios();
    });
  }

  showEditarDomiciliario(domiciliario){
    const dialogRef = this.dialog.open(FormDomiciliarioComponent,{
      width: '700px',
      data: {
        tipo: 'Editar',
        domiciliario
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarDomiciliarios();
    });
  }

  eliminar(domiciliario){
    Swal.fire({
      title: '¿Estas Seguro Que Desea Eliminar El Domiciliario? \n' + domiciliario.nombre + " "+ domiciliario.apellido,
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El Domiciliario ha sido Eliminado..',
          'success'
        )
        this._domiciliarioService.deleteDomiciliario(domiciliario.id).subscribe(data=>{
          this.actualizarDomiciliarios();
        },error =>{
          console.log(console.error);
        })
      }
    })
  }
}