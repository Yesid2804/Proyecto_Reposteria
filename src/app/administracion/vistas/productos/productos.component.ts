import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'app/administracion/models/producto';
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
    private _productoService: ProductosService,
    ) { }

  columns: any[] = [
    {indice: 'indice',columna: '#'},
    {indice: 'nombre',columna: 'Nombre'},
    {indice:'categoria',columna:'Categoria'},
    {indice:'costo',columna:'Costo'},
    {indice:'descripcion',columna:'Descripcion'},
]

listProducto: Producto[] = [
]

  ngOnInit(): void {
    this.actualizarProductos();
  }

  actualizarProductos(){
    this._productoService.getListProductos().subscribe((data) =>{
      this.listProducto = data;
   }, error=>{
     console.log(error);
   })
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
    Swal.fire({
      title: 'Estas Seguro Que Desea Eliminar El Producto?',
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
          '¡El producto ha sido Eliminado! ',
          'success'
          )
          this._productoService.deleteProducto(producto.id).subscribe(data=>{
       
            this.actualizarProductos();
          },error =>{
            console.log(console.error);
          })
      }
    })
  }
}