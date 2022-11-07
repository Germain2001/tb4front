import { Department } from 'src/app/model/department';
import { DepartmentService } from 'src/app/service/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-buscar',
  templateUrl: './department-buscar.component.html',
  styleUrls: ['./department-buscar.component.css']
})
export class DepartmentBuscarComponent implements OnInit {
  textoBuscar: string = ""
  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array:Department[] = [];
    this.departmentService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.ndepartment.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.departmentService.setLista(array);
    })
  }

}
