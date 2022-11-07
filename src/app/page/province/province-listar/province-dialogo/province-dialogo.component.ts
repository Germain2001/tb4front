import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProvinceService } from 'src/app/service/province.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-dialogo',
  templateUrl: './province-dialogo.component.html',
  styleUrls: ['./province-dialogo.component.css']
})
export class ProvinceDialogoComponent implements OnInit {

  constructor(private provinceService: ProvinceService,
    private dialogRef:MatDialogRef<ProvinceDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.provinceService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
