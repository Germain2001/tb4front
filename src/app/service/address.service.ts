import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  url: string = "http://localhost:8081/direcciones"
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Address[]>(this.url);
  }
}
