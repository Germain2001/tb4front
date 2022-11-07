import { Department } from './../../../model/department';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-editar',
  templateUrl: './department-editar.component.html',
  styleUrls: ['./department-editar.component.css']
})
export class DepartmentEditarComponent implements OnInit {

  department: Department = new Department();
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";

  constructor(private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
  });
}

aceptar(): void {
  if (this.department.ndepartment.length > 0) {
    if (this.edicion) {
      this.departmentService.modificar(this.department).subscribe(data => {
        this.departmentService.listar().subscribe(data => {
          this.departmentService.setLista(data);
        })
      })
    } else {
      this.departmentService.insertar(this.department).subscribe(data => {
        this.departmentService.listar().subscribe(data => {
          this.departmentService.setLista(data);
        })
      })
    }
    this.router.navigate(['department']);
  } else {
    this.mensaje = "Complete los valores requeridos";
  }
}
init() {
  if (this.edicion) {
    this.departmentService.listarId(this.id).subscribe(data => {
      this.department = data;
    })
  }
}
}
