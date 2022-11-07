import { DirectionDialogoComponent } from './direction-dialogo/direction-dialogo.component';
import { Direction } from './../../../model/direction';
import { DirectionService } from './../../../service/direction.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-direction-listar',
  templateUrl: './direction-listar.component.html',
  styleUrls: ['./direction-listar.component.css']
})
export class DirectionListarComponent implements OnInit {
  dataSource: MatTableDataSource<Direction> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'urbanizacion','calle','manzana','lote','departamento','distrito', 'acciones'];
  private idMayor: number = 0;
  constructor(private di: DirectionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.di.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.di.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.di.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DirectionDialogoComponent);
  }
  eliminar(id: number) {
    this.di.eliminar(id).subscribe(() => {
      this.di.listar().subscribe(data => {
        this.di.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
