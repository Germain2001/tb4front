import { ZoneService } from './../../../service/zone.service';
import { Component, OnInit } from '@angular/core';
import { Zone } from 'src/app/model/zone';

@Component({
  selector: 'app-zone-buscar',
  templateUrl: './zone-buscar.component.html',
  styleUrls: ['./zone-buscar.component.css']
})
export class ZoneBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private zoneService:ZoneService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array:Zone[] = [];
    this.zoneService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.nzone.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.zoneService.setLista(array);
    })
  }

}
