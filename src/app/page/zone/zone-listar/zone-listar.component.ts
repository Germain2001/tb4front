import { ZoneDialogoComponent } from './zone-dialogo/zone-dialogo.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Zone } from 'src/app/model/zone';
import { ZoneService } from 'src/app/service/zone.service';

@Component({
  selector: 'app-zone-listar',
  templateUrl: './zone-listar.component.html',
  styleUrls: ['./zone-listar.component.css']
})
export class ZoneListarComponent implements OnInit {
  dataSource: MatTableDataSource<Zone> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name','peligro','longitud', 'acciones'];
  private idMayor: number = 0;
  constructor(private zo: ZoneService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.zo.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.zo.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.zo.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ZoneDialogoComponent);
  }
  eliminar(id: number) {
    this.zo.eliminar(id).subscribe(() => {
      this.zo.listar().subscribe(data => {
        this.zo.setLista(data);
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
