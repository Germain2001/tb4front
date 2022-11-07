import { DistrictService } from 'src/app/service/district.service';
import { District } from 'src/app/model/district';
import { ProvinceService } from 'src/app/service/province.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district-buscar',
  templateUrl: './district-buscar.component.html',
  styleUrls: ['./district-buscar.component.css']
})
export class DistrictBuscarComponent implements OnInit {
  textoBuscar: string ="";
  constructor(private districtService: DistrictService) { }

  ngOnInit(): void {
  }
  buscar(e: any) {
    let array:District[] = [];
    this.districtService.listar().subscribe(data => {

      data.forEach((element, index) => {
        if (element.ndistrict.includes(e.target.value)) {
          array.push(data[index]);
        }
      });
      this.districtService.setLista(array);
    })
  }

}
