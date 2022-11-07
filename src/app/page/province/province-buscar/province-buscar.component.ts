import { Province } from 'src/app/model/province';
import { ProvinceService } from 'src/app/service/province.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-province-buscar',
  templateUrl: './province-buscar.component.html',
  styleUrls: ['./province-buscar.component.css']
})
export class ProvinceBuscarComponent implements OnInit {
  textoBuscar: string = "";
  constructor(private provinceService: ProvinceService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array:Province[] = [];
    this.provinceService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.nprovince.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.provinceService.setLista(array);
    })
  }
}
