import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private myAppUrl = 'https://localhost:44300/';
  private myApiUrl = 'api/pulsaciones/'

  constructor(private http: HttpClient) { }

  getListVenta(): Observable<any>{
    return this.http.get<any>(this.myApiUrl);
  }

  deleteVenta(id: number): Observable<any>{
    return this.http.delete(this.myApiUrl + id)
  }

  saveVenta(venta: any): Observable<any>{
     return this.http.post(this.myApiUrl,venta);
  }

  updateVenta(id:number, venta: any): Observable<any>{
      return this.http.put(this.myApiUrl +id ,venta)
  }
}