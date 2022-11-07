import { DirectionService } from './../../../service/direction.service';
import { Direction } from './../../../model/direction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction-buscar',
  templateUrl: './direction-buscar.component.html',
  styleUrls: ['./direction-buscar.component.css']
})
export class DirectionBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private directionService:DirectionService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array:Direction[] = [];
    this.directionService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.nurbanizacion.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.directionService.setLista(array);
    })
  }

}
