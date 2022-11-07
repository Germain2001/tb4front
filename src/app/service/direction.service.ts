import { Direction } from './../model/direction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  url: string = "http://localhost:8081/direcciones";
  private listaCambio = new Subject<Direction[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http: HttpClient) {}

  listar(){
    return this.http.get<Direction[]>(this.url);
  }
  insertar(direction:Direction){
    return this.http.post(this.url,direction)
  }

  setLista(listaNueva:Direction[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }

  modificar(direction: Direction) {
    return this.http.put(this.url, direction);
  }
  listarId(id: number) {

    return this.http.get<Direction>(`${this.url}/${id}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<Direction[]>(`${this.url}/buscar`, texto.toLowerCase(), {
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
