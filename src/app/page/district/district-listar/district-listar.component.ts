import { Province } from 'src/app/model/province';
import { ProvinceService } from 'src/app/service/province.service';
import { Component, OnInit } from '@angular/core';
import { DistrictService } from 'src/app/service/district.service';
import {MatTableDataSource} from '@angular/material/table'
import { District } from 'src/app/model/district';
import { MatDialog } from '@angular/material/dialog';
import { DistrictDialogoComponent } from './district-dialogo/district-dialogo.component';

@Component({
  selector: 'app-district-listar',
  templateUrl: './district-listar.component.html',
  styleUrls: ['./district-listar.component.css']
})
export class DistrictListarComponent implements OnInit {
  dataSource:MatTableDataSource<District> =new MatTableDataSource();
  displayedColumns:string[]=['id','district', 'province', 'acciones'];
  listaProvince: Province[] = [];
  idProvinceSeleccionado: number = 0;
  private idMayor: number = 0;

  constructor(private ps:DistrictService,
    private provinceService:ProvinceService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
    this.provinceService.listar().subscribe(data => { this.listaProvince = data });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DistrictDialogoComponent);
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
