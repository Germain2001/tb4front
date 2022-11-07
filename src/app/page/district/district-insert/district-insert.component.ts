import { Province } from 'src/app/model/province';
import { District } from 'src/app/model/district';
import { ProvinceService } from 'src/app/service/province.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DistrictService } from 'src/app/service/district.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district-insert',
  templateUrl: './district-insert.component.html',
  styleUrls: ['./district-insert.component.css']
})
export class DistrictInsertComponent implements OnInit {
  district: District = new District();
  id: number = 0;
  edicion: boolean = false;
  listaProvince: Province[] = [];
  idProvinceSeleccionado: number = 0;
  mensaje: string = "";

  constructor(private districtService:DistrictService,
    private route:ActivatedRoute,
    private router:Router, private provinceService:ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.provinceService.listar().subscribe(data => { this.listaProvince = data });
  }
  aceptar() {
    if (this.district.ndistrict.length > 0 && this.idProvinceSeleccionado > 0) {
      let p = new Province();
      p.idProvince = this.idProvinceSeleccionado;
      this.district.province = p;
      if (this.edicion) {
        this.districtService.modificar(this.district).subscribe(data => {
          this.districtService.listar().subscribe(data => {
            this.districtService.setLista(data);
          })
        })
      } else {
        this.districtService.insertar(this.district).subscribe(data => {
          this.districtService.listar().subscribe(data => {
            this.districtService.setLista(data);
          })
        })
      }
      this.router.navigate(['district']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.districtService.listarId(this.id).subscribe(data => {
        this.district = data
        console.log(data);
        this.idProvinceSeleccionado = data.province.idProvince;
      });

    }

  }

}
