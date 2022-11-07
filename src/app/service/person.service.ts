import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url: string = "http://localhost:5000/personas"
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Person[]>(this.url);
  }
}
