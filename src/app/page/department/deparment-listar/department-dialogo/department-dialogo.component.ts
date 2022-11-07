import { DepartmentComponent } from './../../department.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/service/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-dialogo',
  templateUrl: './department-dialogo.component.html',
  styleUrls: ['./department-dialogo.component.css']
})
export class DepartmentDialogoComponent implements OnInit {

  constructor(private departmentService: DepartmentService,
    private dialogRef: MatDialogRef<DepartmentDialogoComponent>) { }

  ngOnInit(): void {
  }

  confirmar(estado: boolean) {
    this.departmentService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
