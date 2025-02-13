import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  users: any[];
  readonly API_URL = "http://localhost:8080/duenio/traer";

  constructor(private http: HttpClient) {
    this.users = [];
   }

   getUsers(){
    return this.http.get<any[]>(this.API_URL);
  }

}
