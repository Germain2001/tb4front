import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { MatTableDataSource } from '@angular/material/table'
import { Department } from 'src/app/model/department';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentDialogoComponent } from './department-dialogo/department-dialogo.component';

@Component({
  selector: 'app-deparment-listar',
  templateUrl: './deparment-listar.component.html',
  styleUrls: ['./deparment-listar.component.css']
})
export class DeparmentListarComponent implements OnInit {
  dataSource: MatTableDataSource<Department> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'acciones'];
  private idMayor: number = 0;
  constructor(private ps: DepartmentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DepartmentDialogoComponent);
  }
  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
