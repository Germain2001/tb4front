import { ComplaintService } from 'src/app/service/complaint.service';
import { Complaint } from 'src/app/model/complaint';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-buscar',
  templateUrl: './complaint-buscar.component.html',
  styleUrls: ['./complaint-buscar.component.css']
})
export class ComplaintBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array:Complaint[] = [];
    this.complaintService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.ncomplaint.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.complaintService.setLista(array);
    })
  }

}
