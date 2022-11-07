import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { Zone } from '../model/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  url: string = "http://localhost:8081/zonas"
  private listaCambio = new Subject<Zone[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Zone[]>(this.url);

  }
  insertar(zone:Zone){
    return this.http.post(this.url,zone)
  }

  setLista(listaNueva:Zone[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(zone: Zone) {
    return this.http.put(this.url, zone);
  }
  listarId(id: number) {

    return this.http.get<Zone>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<Zone[]>(`${this.url}/buscar`, texto.toLowerCase(), {
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
