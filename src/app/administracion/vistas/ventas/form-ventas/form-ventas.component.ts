import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'app/administracion/models/producto';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY } from '@angular/material/datepicker/date-range-selection-strategy';
import { data } from 'jquery';
import { ProductosService } from '../../productos/productos.service';
import { Venta } from 'app/administracion/models/venta';


declare var $: any;
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-ventas',
  templateUrl: './form-ventas.component.html',
  styleUrls: ['./form-ventas.component.css']

})
export class FormVentasComponent implements OnInit {

  templateUrl: 'select-overview-example.html'
  titulo = "Registar Venta"

  formVenta: Venta = {
    id: null,
    identificacionCliente: null,
    idProducto: null,
    precioUnitario: null,
    cantidad: null,
    totalVenta:null
  }

  public listVenta: Venta[] = [];

  form:FormGroup;


  constructor(
    public dialogRef: MatDialogRef<FormVentasComponent>,
    private productoService: ProductosService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataModal: any
  
    ) { 
      this.form = this.fb.group({
        id: uuidv4(),
        idCliente:['',Validators.required],
        idProducto :['',Validators.required],
        precio :['',Validators.required],
        cantidad:['',[Validators.required,Validators.maxLength(100)]],
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
    this.obtenerVenta();
    if(this.dataModal.tipo !== "Agregar" ){
      this.titulo = "Editar producto"
      this.formVenta =  this.dataModal.producto;
    }
  }

  obtenerVenta(){
    this.productoService.getListProductos().subscribe(data =>{
      this.listVenta = data;
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
    if(this.dataModal.tipo !== "Agregar" ){
        this.productoService.updateProducto(this.formVenta.id,this.formVenta).subscribe(data=>{
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
      this.formVenta.id = uuidv4().number;
      this.productoService.saveProducto(this.formVenta).subscribe(data=>{
        Swal.fire({
          position: 'center',icon: 'success',title: 'Producto guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
         this.obtenerVenta();
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