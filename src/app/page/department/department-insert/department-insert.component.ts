import { Router, ActivatedRoute, Params } from '@angular/router';
import { Department } from 'src/app/model/department';
import { DepartmentService } from 'src/app/service/department.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-department-insert',
  templateUrl: './department-insert.component.html',
  styleUrls: ['./department-insert.component.css']
})
export class DepartmentInsertComponent implements OnInit {

  department: Department = new Department();
  mensaje: string = "";
  id: number = 0;

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {

  }

  aceptar() {
    if (this.department.ndepartment.length > 0 ) {
      this.departmentService.insertar(this.department).subscribe(data => {
        this.departmentService.listar().subscribe(data => {
          this.departmentService.setLista(data);
        })
      })
      this.router.navigate(['department']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

}
