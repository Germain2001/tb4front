import { MatDialog } from '@angular/material/dialog';
import { ProvinceDialogoComponent } from './province-dialogo/province-dialogo.component';
import { DepartmentService } from 'src/app/service/department.service';
import { Router } from '@angular/router';
import { Province } from './../../../model/province';
import { MatTableDataSource } from '@angular/material/table';
import { ProvinceService } from './../../../service/province.service';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/model/department';

@Component({
  selector: 'app-province-listar',
  templateUrl: './province-listar.component.html',
  styleUrls: ['./province-listar.component.css']
})
export class ProvinceListarComponent implements OnInit {
  dataSource: MatTableDataSource<Province> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'province', 'department', 'acciones']
  listaDepartment: Department[] = [];
  idDepartmentSeleccionado: number = 0;
  private idMayor: number = 0;

  constructor(private pv: ProvinceService,
    private router: Router,
    private departmentService: DepartmentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pv.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.pv.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pv.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    this.departmentService.listar().subscribe(data => { this.listaDepartment = data });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ProvinceDialogoComponent);
  }
  eliminar(id: number) {
    this.pv.eliminar(id).subscribe(() => {
      this.pv.listar().subscribe(data => {
        this.pv.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
