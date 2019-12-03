import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNodejsService {
  URL_API = 'https://api-node-travels.herokuapp.com/api/'
  constructor(
    private http: HttpClient
  ) { }

  get_sales(): Observable<any> {
    return this.http.get(`${this.URL_API}sales`)
  }
}
