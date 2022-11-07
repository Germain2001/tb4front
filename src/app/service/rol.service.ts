import { Rol } from './../model/rol';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  url: string = "http://localhost:8081/roles"

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Rol[]>(this.url);

  }
}
