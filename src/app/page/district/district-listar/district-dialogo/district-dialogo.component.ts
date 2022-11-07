import { MatDialogRef } from '@angular/material/dialog';
import { DistrictService } from 'src/app/service/district.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district-dialogo',
  templateUrl: './district-dialogo.component.html',
  styleUrls: ['./district-dialogo.component.css']
})
export class DistrictDialogoComponent implements OnInit {

  constructor(private districtService:DistrictService,
    private dialogRef:MatDialogRef<DistrictDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.districtService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
