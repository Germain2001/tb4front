import { DepartmentService } from 'src/app/service/department.service';
import { Department } from 'src/app/model/department';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/model/province';
import { ProvinceService } from 'src/app/service/province.service';


@Component({
  selector: 'app-province-insert',
  templateUrl: './province-insert.component.html',
  styleUrls: ['./province-insert.component.css']
})
export class ProvinceInsertComponent implements OnInit {
  province: Province = new Province();
  id: number = 0;
  edicion: boolean = false;
  listaDepartment: Department[] = [];
  idDepartmentSeleccionado: number = 0;
  mensaje: string = "";

  constructor(private provinceService: ProvinceService,
    private route: ActivatedRoute,
    private router: Router, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.departmentService.listar().subscribe(data => { this.listaDepartment = data });
  }
  aceptar() {
    if (this.province.nprovince.length > 0 && this.idDepartmentSeleccionado > 0) {
      let p = new Department();
      p.idDepartment = this.idDepartmentSeleccionado;
      this.province.department = p;
      if (this.edicion) {
        this.provinceService.modificar(this.province).subscribe(data => {
          this.provinceService.listar().subscribe(data => {
            this.provinceService.setLista(data);
          })
        })
      } else {
        this.provinceService.insertar(this.province).subscribe(data => {
          this.provinceService.listar().subscribe(data => {
            this.provinceService.setLista(data);
          })
        })
      }
      this.router.navigate(['province']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.provinceService.listarId(this.id).subscribe(data => {
        this.province = data
        console.log(data);
        this.idDepartmentSeleccionado = data.department.idDepartment;
      });

    }

  }

}
