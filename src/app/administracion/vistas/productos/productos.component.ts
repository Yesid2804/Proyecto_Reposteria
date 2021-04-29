import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'app/administracion/models/producto';
import { Button } from 'selenium-webdriver';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ProductosService } from './productos.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog,
    private productoService: ProductosService
    ) { }

  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'nombre',columna: 'Nombre'},
    {indice:'categoria',columna:'Categoria'},
    {indice:'ingredientes',columna:'Ingredientes'},
    {indice:'costo',columna:'Costo'},
    {indice:'descripcion',columna:'Descripcion'},
]
  productos: Producto[] = [
    {
      id: '',
      nombre: 'Gaseosas',
      categoria: 'Bebidas',
      costo: 20000,
      descripcion:''
    }
  ]

  ngOnInit(): void {
    this.actualizarProductos();
  }

  actualizarProductos(){
    this.productos = this.productoService.getProductos();
    console.log(this.productos);
  }

  showRegistrarProducto(){
    const dialogRef = this.dialog.open(FormProductoComponent,{
      width: '700px',
      data: {
        tipo: 'Agregar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.actualizarProductos();
    });
  }
  showEditarProducto(producto){
    const dialogRef = this.dialog.open(FormProductoComponent,{
      width: '700px',
      data: {
        tipo: 'Editar',
        producto
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.actualizarProductos();
    });
  }
  
  eliminar(producto){
    this.productoService.eliminarProducto(producto)
    this.actualizarProductos();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto eliminado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
