import { District } from './../model/district';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  url: string = "http://localhost:8081/distritos";
  private listaCambio = new Subject<District[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<District[]>(this.url);
  }
  insertar(district:District){
    return this.http.post(this.url,district)
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  setLista(listaNueva:District[]){
    this.listaCambio.next(listaNueva);
  }
  modificar(district: District) {
    return this.http.put(this.url, district);
  }
  listarId(id: number) {

    return this.http.get<District>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<District[]>(`${this.url}/buscar`, texto.toLowerCase(), {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });

    }
    return EMPTY;
  }

  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }

  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
}

