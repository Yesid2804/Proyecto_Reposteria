import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  private baseUrl: string;
  private token: string;

  constructor(
    private readonly http: HttpClient
  ) {
    this.baseUrl = `${environment.API}`;
    this.token = this.getToken();
  }

  public getToken(): string {
    let existingToken: string;
    if (localStorage.getItem('token')) {
      existingToken = localStorage.getItem('token') as string;
    }
    return existingToken;
  }

  public getEntries<T>(
    contentTypePluralized: string,
    params?: HttpParams
  ): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${contentTypePluralized}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`
      },
      params
    });
  }

  /**
   * Obtenga el recuento total de entradas con los criterios proporcionados
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param params Filtrar y ordenar consultas
   * @returns Observable<number>
   */
  public getEntryCount(
    contentTypePluralized: string,
    params?: HttpParams
  ): Observable<number> {
    return this.http.get<number>(
      `${this.baseUrl}/${contentTypePluralized}/count`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Max-Age': '0',
          'Authorization': `Bearer ${this.token}`
        },
        params
      }
    );
  }

  /**
   * Obtén una entrada específica
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param id ID de entrada
   * @returns Observable
   */
  public getEntry<T>(contentTypePluralized: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${contentTypePluralized}/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`
      },
    });
  }

  /**
   * Crear datos
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param data Nueva entrada
   * @param params Parametros
   * @returns Observable
   */
  public createEntry<T>(
    contentTypePluralized: string,
    data: T,
    params?: HttpParams
  ): Observable<T> {
    console.log(data)
    return this.http.post<T>(`${this.baseUrl}/${contentTypePluralized}`, data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`
      },
      params
    });
  }

  /**
   * Actualizar datos
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param id ID de entrada
   * @param data Nuevos datos
   * @param params Parametros
   * @returns Observable
   */
  public updateEntry<T>(
    contentTypePluralized: string,
    id: number,
    data: T,
    params?: HttpParams
  ): Observable<T> {
    return this.http.put<T>(
      `${this.baseUrl}/${contentTypePluralized}/${id}`,
      data,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Max-Age': '0',
          'Authorization': `Bearer ${this.token}`
        },
        params
      }
    );
  }

  /**
   * Eliminar una entrada
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param id ID de entrada
   * @returns Observable
   */
  public deleteEntry<T>(
    contentTypePluralized: string,
    id: number
  ): Observable<T> {
    return this.http.delete<T>(
      `${this.baseUrl}/${contentTypePluralized}/${id}`
      , {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Max-Age': '0',
          'Authorization': `Bearer ${this.token}`
        },
      });
  }

  /**
   * Buscar archivos
   * @param query Palabras clave
   * @returns Observable
   */
  public searchFiles(query: string): Observable<File> {
    return this.http.get<File>(
      `${this.baseUrl}/upload/search/${decodeURIComponent(query)}`
    );
  }

  /**
   * Obtener archivos
   * @param params Filtrar y ordenar consultas
   * @returns Observable
   */
  public getFiles(params?: HttpParams): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseUrl}/upload/files`, {
      params
    });
  }

  /**
   * Obtener un archivo
   * @param id ID de entrada
   * @returns Observable
   */
  public getFile(id: string): Observable<File> {
    return this.http.get<File>(`${this.baseUrl}/upload/files/${id}`);
  }

  /**
   * Subir archivos
   * @param data FormData
   * @param params Parametros
   */
  public upload(data: FormData, params?: HttpParams): Observable<File> {
    return this.http.post<File>(`${this.baseUrl}/upload`, data, {
      params
    });
  }
  /**
   * Subir archivos
   * @param data FormData
   * @param params Parametros
   */
  public uploadAndData(contentTypePluralized: string, data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/${contentTypePluralized}`, data, 
    {
      reportProgress: true, 
      observe: 'events',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`,
        'contentType': 'multipart/form-data'
      }
    });
  }
  /**
   * Subir archivos
   * @param data FormData
   * @param params Parametros
   */
  public uploadAndData2(contentTypePluralized: string, data: FormData, pssarams?: any) {
    return this.http.post<File>(`${this.baseUrl}/${contentTypePluralized}`, data, 
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`,
        'contentType': 'multipart/form-data'
      }
    });
  }

  /**
   * Subir archivos
   * @param data FormData
   * @param params Parametros
   */
  public uploadAndUpdateData(contentTypePluralized: string,id: string, data: FormData, params?: HttpParams): Observable<File> {
    return this.http.put<File>(`${this.baseUrl}/${contentTypePluralized}/${id}`, data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`,
        'contentType': 'multipart/form-data'
      }
    });
  }

  /**
   * POST
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param data Nueva entrada
   * @param params Parametros
   * @returns Observable
   */
  public accionPOST<T>(
    contentTypePluralized: string,
    params?: HttpParams
  ): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${contentTypePluralized}`,null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`
      },
      params
    });
  }

  /**
   * PUT
   * @param contentTypePluralized Tipo de contenido Pluralizado
   * @param data Nueva entrada
   * @param params Parametros
   * @returns Observable
   */
  public accionPUT<T>(
    contentTypePluralized: string,
    data: T,
    params?: HttpParams
  ): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${contentTypePluralized}`,data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': '0',
        'Authorization': `Bearer ${this.token}`
      },
      params
    });
  }


}
