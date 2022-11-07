import { ZoneService } from './../../../../service/zone.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-zone-dialogo',
  templateUrl: './zone-dialogo.component.html',
  styleUrls: ['./zone-dialogo.component.css']
})
export class ZoneDialogoComponent implements OnInit {

  constructor(private zoneService: ZoneService,
    private dialogRef:MatDialogRef<ZoneDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.zoneService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
