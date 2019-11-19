import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNodejsService {
  URL_API = 'https://backend-tiendaenlinea-tics.herokuapp.com/api/v1/'
  constructor(
    private http: HttpClient
  ) { }

  get_sales(): Observable<any> {
    return this.http.get(`${this.URL_API}sales/show_all`)
  }
}
