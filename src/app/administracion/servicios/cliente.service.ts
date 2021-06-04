import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'app/services/httpRequest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private entity = 'cliente';
  constructor(private http: HttpRequestService ) { }

  getListClientes(): Observable<any>{
    return this.http.getEntries<any>(this.entity);
  }
  saveCliente(cliente: any): Observable<any>{
    return this.http.createEntry(this.entity, cliente);
 }
  updateCliente(id:number, cliente: any): Observable<any>{
    return this.http.updateEntry(this.entity, id, cliente)
}
  deleteCliente(id: number): Observable<any>{
    return this.http.deleteEntry(this.entity, id)
  }
}
