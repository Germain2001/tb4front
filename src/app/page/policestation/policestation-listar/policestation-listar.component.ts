import { DirectionService } from './../../../service/direction.service';
import { Direction } from './../../../model/direction';
import { PolicestationDialogoComponent } from './policestation-dialogo/policestation-dialogo.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PoliceStation } from './../../../model/policestation';
import { PolicestationService } from './../../../service/policestation.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-policestation-listar',
  templateUrl: './policestation-listar.component.html',
  styleUrls: ['./policestation-listar.component.css']
})
export class PolicestationListarComponent implements OnInit {
dataSource:MatTableDataSource<PoliceStation>=new MatTableDataSource();
displayedColumns:string[]=['id', 'name','direction', 'phone', 'acciones'];
listaAddress: Direction[] = [];
  idPoliceSeleccionado: number = 0;
  private idMayor: number = 0;

  constructor(private ps:PolicestationService,private router: Router,
    private directionService: DirectionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    this.directionService.listar().subscribe(data => { this.listaAddress = data });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PolicestationDialogoComponent);
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
