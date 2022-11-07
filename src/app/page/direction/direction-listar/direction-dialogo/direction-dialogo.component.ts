import { DirectionService } from './../../../../service/direction.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-direction-dialogo',
  templateUrl: './direction-dialogo.component.html',
  styleUrls: ['./direction-dialogo.component.css']
})
export class DirectionDialogoComponent implements OnInit {

  constructor(private directionService: DirectionService,
    private dialogRef:MatDialogRef<DirectionDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.directionService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
