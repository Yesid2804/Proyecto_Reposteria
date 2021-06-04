// import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peticion } from "../../../serviceLocalstorage/serviceLocalStorage";
import { HttpRequestService } from "../../../services/httpRequest.service";
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private myAppUrl = 'https://localhost:44321/';
  private entity = 'producto';
  constructor(private http: HttpRequestService ) { }

  getListProductos(): Observable<any>{
    return this.http.getEntries<any>(this.entity);
  }

  saveProducto(producto: any): Observable<any>{
    return this.http.createEntry(this.entity, producto);
 }

  updateProducto(id:number, producto: any): Observable<any>{
    return this.http.updateEntry(this.entity, id, producto)
}
  deleteProducto(id: number): Observable<any>{
    return this.http.deleteEntry(this.entity, id)
  }
}
