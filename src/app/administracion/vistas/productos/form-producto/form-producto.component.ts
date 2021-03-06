import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'app/administracion/models/producto';
import { ProductosService } from '../productos.service';
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import 'sweetalert2/src/sweetalert2.scss'

declare var $: any;
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css'],
  providers: [ProductosService],
})

export class FormProductoComponent implements OnInit {
  templateUrl: 'select-overview-example.html'
  titulo = "Registar producto"

  formProducto: Producto = {
    id: null,
    nombre: '',
    categoria: '',
    costo: null,
    descripcion: ''
  }

  public listProducto: Producto[] = [];

  form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormProductoComponent>,
    private productoService: ProductosService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataModal: any
  
    ) { 
      this.form = this.fb.group({
        id: uuidv4(),
        nombre:['',Validators.required],
        categoria :['',Validators.required],
        costo :['',Validators.required],
        descripcion:['',[Validators.required,Validators.maxLength(100)]],
      })
    }

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
    this.obtenerProductos();
    if(this.dataModal.tipo !== "Agregar" ){
      this.titulo = "Editar producto"
      this.formProducto =  this.dataModal.producto;
    }
  }

  obtenerProductos(){
    this.productoService.getListProductos().subscribe(data =>{
      this.listProducto = data;
    },error =>{
       console.log(error)
    });
  }

  agregarProducto(){
    console.log(this.form);
  }

  cerrarModal(){
      this.dialogRef.close();
  }

  guardarProducto(){
    if(this.dataModal.tipo !== "Agregar"){
        this.productoService.updateProducto(this.formProducto.id,this.formProducto).subscribe(data=>{
        this.dataModal.tipo=="Agregar";
      });
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto editado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.formProducto.id = uuidv4().number;
      this.productoService.saveProducto(this.formProducto).subscribe(data=>{
        Swal.fire({
          position: 'center',icon: 'success',title: 'Producto guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
         this.obtenerProductos();
      }, error=>{
        console.log(console.error);   
        Swal.fire({
          position: 'center',icon: 'error',title: 'Ocuurio un Error',
          showConfirmButton: false,
          timer: 1500
        });
      })
    }
    this.dialogRef.close();
  }
 
}