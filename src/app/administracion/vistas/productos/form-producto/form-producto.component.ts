import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'app/administracion/models/producto';
import { ProductosService } from '../productos.service';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
declare var $: any;
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})


export class FormProductoComponent implements OnInit {
  templateUrl: 'select-overview-example.html'
  titulo = "Registar producto"

  formProducto: Producto = {
    id: null,
    nombre: '',
    categoria: '',
    costo: null,
  }
  constructor(
    public dialogRef: MatDialogRef<FormProductoComponent>,
    private productoService: ProductosService,
    @Inject(MAT_DIALOG_DATA) public dataModal: any
    
  
    ) { }

    foods: Food[] = [
      {value: 'Tortas y Postres', viewValue: 'Tortas y Postres'},
      {value: 'Combos', viewValue: 'Combos'},
      {value: 'Regalos', viewValue: 'Regalos'},
      {value: 'Panes', viewValue: 'Panes'},
      {value: 'Celebracion', viewValue: 'Celebracion'},
      {value: 'Bebidas', viewValue: 'Bebidas'},
      {value: 'Antojos', viewValue: 'Antojos'},
    ];

  ngOnInit(): void {
    if(this.dataModal.tipo !== "Agregar" ){
      this.titulo = "Editar producto"
      this.formProducto = this.dataModal.producto;
    }
      
  }

  cerrarModal(){
      this.dialogRef.close();
  }

  guardarProducto(){
    if(this.dataModal.tipo !== "Agregar" ){
      this.productoService.editarProducto(this.formProducto);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto editado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.formProducto.id = uuidv4();
      this.productoService.addProducto(this.formProducto);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto guardado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }
    this.dialogRef.close();
  }
}
