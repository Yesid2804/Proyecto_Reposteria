import { Injectable } from '@angular/core';
import { Producto } from 'app/administracion/models/producto';
import { peticion } from "../../../serviceLocalstorage/serviceLocalStorage";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductos(){
    return peticion.obtenerLista('productos');
  }
  addProducto(producto: Producto){
    return peticion.agregarElemento('productos',producto);
  }
  editarProducto(producto: Producto){
    return peticion.editartElemento('productos',producto);
  }
  eliminarProducto(producto: Producto){
    return peticion.eliminar('productos',producto.id);
  }
}
