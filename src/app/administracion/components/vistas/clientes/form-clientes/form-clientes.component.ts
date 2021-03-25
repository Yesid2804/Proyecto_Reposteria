import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  templateUrl: 'select-overview-example.html'
  titulo = "Registar clientes"
  constructor(
    public dialogRef: MatDialogRef<FormClientesComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: any

  
    ) { }

 
  ngOnInit(): void {
    if(this.dataModal.tipo !== "Agregar" )
      this.titulo = "Editar cliente"  
  }

  cerrarModal(){
      this.dialogRef.close();
  }

}
