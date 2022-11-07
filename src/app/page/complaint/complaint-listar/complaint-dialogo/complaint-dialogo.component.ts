import { MatDialogRef } from '@angular/material/dialog';
import { ComplaintService } from 'src/app/service/complaint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-dialogo',
  templateUrl: './complaint-dialogo.component.html',
  styleUrls: ['./complaint-dialogo.component.css']
})
export class ComplaintDialogoComponent implements OnInit {

  constructor(private complaintService:ComplaintService,
    private dialogRef:MatDialogRef<ComplaintDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado: boolean) {
    this.complaintService.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }

}
