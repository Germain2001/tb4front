import { Component, OnInit } from '@angular/core';
import { PoliceStation } from 'src/app/model/policestation';
import { PolicestationService } from 'src/app/service/policestation.service';


@Component({
  selector: 'app-policestation-buscar',
  templateUrl: './policestation-buscar.component.html',
  styleUrls: ['./policestation-buscar.component.css']
})
export class PolicestationBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private policestationService: PolicestationService) { }

  ngOnInit(): void {
  }

  buscar(e: any) {
    let array:PoliceStation[] = [];
    this.policestationService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.npoliceStation.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.policestationService.setLista(array);
    })
  }

}
