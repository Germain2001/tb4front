import { ZoneService } from './../../../service/zone.service';
import { Zone } from 'src/app/model/zone';
import { ComplaintDialogoComponent } from './complaint-dialogo/complaint-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { PoliceStation } from './../../../model/policestation';
import { PolicestationService } from './../../../service/policestation.service';
import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/service/complaint.service';
import { MatTableDataSource } from '@angular/material/table'
import { Complaint } from 'src/app/model/complaint';

@Component({
  selector: 'app-complaint-listar',
  templateUrl: './complaint-listar.component.html',
  styleUrls: ['./complaint-listar.component.css']
})
export class ComplaintListarComponent implements OnInit {
  dataSource: MatTableDataSource<Complaint> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'complaint', 'policestation','zone', 'acciones'];
  listaPolicestation: PoliceStation[] = [];
  listaZona: Zone[] = [];
  idComplaintSeleccionado: number = 0;
  private idMayor: number = 0;

  constructor(private ps: ComplaintService,
    private policestationService:PolicestationService, private dialog:MatDialog, private zoneService:ZoneService) { }

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
    this.policestationService.listar().subscribe(data => { this.listaPolicestation = data });
    this.zoneService.listar().subscribe(data => { this.listaZona = data });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ComplaintDialogoComponent);
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
