import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAdonisjsService {
  URL_API = 'http://127.0.0.1:3333/api/v1/'
  constructor(
    private http: HttpClient
  ) { }


  get_buses(): Observable<any> {
    return this.http.get(`${this.URL_API}buses/show_all`)
  }
  add_bus(bus:any): Observable<any> {
    return this.http.post(`${this.URL_API}buses/create`,bus)
  }
  disable_bus(bus:any,id:string): Observable<any> {
    bus.status = "disabled"
    return this.http.put(`${this.URL_API}buses/disable/${id}`,bus)
  }
  enable_bus(bus:any,id:string): Observable<any> {
    bus.status = "enabled"
    return this.http.put(`${this.URL_API}buses/disable/${id}`,bus)
  }
  update_bus(bus:any,id:string): Observable<any> {
    return this.http.put(`${this.URL_API}buses/update/${id}`,bus)
  }
  delete_bus(id:string): Observable<any> {
    return this.http.delete(`${this.URL_API}buses/delete/${id}`)
  }

  

  get_travels(): Observable<any> {
    return this.http.get(`${this.URL_API}travels/show_all`)
  }
  add_travel(bus:any): Observable<any> {
    return this.http.post(`${this.URL_API}travels/add`,bus)
  }
  disable_travel(bus:any,id:string): Observable<any> {
    return this.http.put(`${this.URL_API}travels/disable/${id}`,bus)
  }
  update_travel(bus:any,id:string): Observable<any> {
    return this.http.put(`${this.URL_API}travels/update/${id}`,bus)
  }
  delete_travel(id:string): Observable<any> {
    return this.http.delete(`${this.URL_API}travels/delete/${id}`)
  }


  get_places(): Observable<any> {
    return this.http.get(`${this.URL_API}places/show_all`)
  }
  add_place(place:any): Observable<any> {
    return this.http.post(`${this.URL_API}places/create`,place)
  }
  update_place(place:any,id:string): Observable<any> {
    return this.http.put(`${this.URL_API}places/update/${id}`,place)
  }
  delete_place(id:string): Observable<any> {
    return this.http.delete(`${this.URL_API}places/delete/${id}`)
  }
}
