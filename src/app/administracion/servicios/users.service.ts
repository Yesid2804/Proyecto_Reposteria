import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequestService } from 'app/services/httpRequest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private myAppUrl = 'https://localhost:44300/';
  private myApiUrl = 'api/pulsaciones/'

  constructor(private http: HttpClient) { }

  login(data): Observable<any>{
    return this.http.post<any>('https://localhost:44321/api/Users/authenticate',data);
  }
}