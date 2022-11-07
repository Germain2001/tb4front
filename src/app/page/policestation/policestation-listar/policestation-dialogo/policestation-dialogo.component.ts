import { Component, OnInit } from '@angular/core';
import { PolicestationService } from 'src/app/service/policestation.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-policestation-dialogo',
  templateUrl: './policestation-dialogo.component.html',
  styleUrls: ['./policestation-dialogo.component.css']
})
export class PolicestationDialogoComponent implements OnInit {

  constructor(private policestationService:PolicestationService,
    private dialogRef:MatDialogRef<PolicestationDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.policestationService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
