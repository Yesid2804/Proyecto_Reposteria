import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { peticion } from 'app/serviceLocalstorage/serviceLocalStorage';
import { HttpRequestService } from 'app/services/httpRequest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomiciliarioService {

  private entity = 'domiciliario';
  constructor(private http: HttpRequestService ) { }

  getListDomiciliarios(): Observable<any>{
    return this.http.getEntries<any>(this.entity);
  }
  saveDomiciliario(domiciliario: any): Observable<any>{
    return this.http.createEntry(this.entity, domiciliario);
 }
  updateDomiciliario(id:number, domiciliario: any): Observable<any>{
    return this.http.updateEntry(this.entity, id, domiciliario)
}
  deleteDomiciliario(id: number): Observable<any>{
    return this.http.deleteEntry(this.entity, id)
  }
}