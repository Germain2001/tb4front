import { Province } from './../model/province';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  url: string = "http://localhost:8081/provincias";
  private listaCambio = new Subject<Province[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  listar(){
    return this.http.get<Province[]>(this.url);
  }
  insertar(province:Province){
    return this.http.post(this.url,province)
  }

  setLista(listaNueva:Province[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }

  modificar(province: Province) {
    return this.http.put(this.url, province);
  }
  listarId(id: number) {

    return this.http.get<Province>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<Province[]>(`${this.url}/buscar`, texto.toLowerCase(), {
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
    return this.http.delete(this.url+"/"+id);
  }
}
