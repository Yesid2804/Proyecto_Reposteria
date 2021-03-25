import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-domiciliario',
  templateUrl: './form-domiciliario.component.html',
  styleUrls: ['./form-domiciliario.component.css']
})
export class FormDomiciliarioComponent implements OnInit {
  templateUrl: 'select-overview-example.html'
  titulo = "Registar domiciliario"
  constructor(
    public dialogRef: MatDialogRef<FormDomiciliarioComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: any
    
  
    ) { }


  ngOnInit(): void {
    if(this.dataModal.tipo !== "Agregar" )
      this.titulo = "Editar producto"  
  }

  cerrarModal(){
      this.dialogRef.close();
  }

}
