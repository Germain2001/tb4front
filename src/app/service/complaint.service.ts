import { Complaint } from './../model/complaint';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  url: string = "http://localhost:8081/denuncias"
  private listaCambio = new Subject<Complaint[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Complaint[]>(this.url);
  }
  insertar(complaint: Complaint) {
    return this.http.post(this.url, complaint)
  }

  setLista(listaNueva: Complaint[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(complaint: Complaint) {
    return this.http.put(this.url, complaint);
  }
  listarId(id: number) {

    return this.http.get<Complaint>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<Complaint[]>(`${this.url}/buscar`, texto.toLowerCase(), {
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
