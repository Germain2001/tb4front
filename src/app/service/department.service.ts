import { Department } from 'src/app/model/department';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { EMPTY, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  url: string = "http://localhost:8081/departamentos"
  private listaCambio = new Subject<Department[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Department[]>(this.url);

  }
  insertar(department:Department){
    return this.http.post(this.url,department)
  }

  setLista(listaNueva:Department[]){
    this.listaCambio.next(listaNueva);
  }
  getLista(){
    return this.listaCambio.asObservable();
  }
  modificar(department: Department) {
    return this.http.put(this.url, department);
  }
  listarId(idDepartment: number) {

    return this.http.get<Department>(`${this.url}/${idDepartment}`);
  }
  buscar(texto: string) {
    if (texto.length != 0) {
      let token = sessionStorage.getItem("token");
      return this.http.post<Department[]>(`${this.url}/buscar`, texto.toLowerCase(), {
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
