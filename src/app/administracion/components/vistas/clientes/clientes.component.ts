import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from 'app/administracion/models/cliente';
import { ClienteService } from 'app/administracion/servicios/cliente.service';
import { Button } from 'selenium-webdriver';
import Swal from 'sweetalert2';
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
 
listCliente: Cliente[] = [
]
  constructor(
    public dialog: MatDialog,
    private _clienteService: ClienteService,

  ) { }

  ngOnInit(): void {
    this.actualizarClientes();
  }


  actualizarClientes(){
    // this.listCliente = this._clienteService.getListClientes();
    this._clienteService.getListClientes().subscribe((data) =>{
      this.listCliente = data;
      console.log(this.listCliente);
   }, error=>{
     console.log(error);
   })
  }

  showRegistrarCliente(){
    const dialogRef = this.dialog.open(FormClientesComponent,{
      width: '700px',
      data: {
        tipo: 'Agregar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.actualizarClientes();
    });
  }


  showEditarCliente(cliente){
    const dialogRef = this.dialog.open(FormClientesComponent,{
      width: '700px',
      data: {
        tipo: 'Editar',
        cliente
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.actualizarClientes();
    });
  }

  eliminar(cliente){
    Swal.fire({
      title: '¿Estas seguro que desea eliminar el cliente? \n'+ cliente.nombre + " "+ cliente.apellido,
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
          'El cliente ha sido Eliminado.',
          'success'
        )
        this._clienteService.deleteCliente(cliente.id).subscribe(data=>{
          this.actualizarClientes();
        },error =>{
          console.log(console.error);
        })
      }
    })
  }
}
