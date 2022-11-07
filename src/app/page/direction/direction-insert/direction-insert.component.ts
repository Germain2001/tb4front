import { District } from './../../../model/district';
import { Direction } from './../../../model/direction';
import { DistrictService } from 'src/app/service/district.service';
import { DirectionService } from './../../../service/direction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-direction-insert',
  templateUrl: './direction-insert.component.html',
  styleUrls: ['./direction-insert.component.css']
})
export class DirectionInsertComponent implements OnInit {
  direction: Direction = new Direction();
  id: number = 0;
  edicion: boolean = false;
  listaDistrict: District[] = [];
  idDistrictSeleccionado: number = 0;
  mensaje: string = "";

  constructor(private directionService: DirectionService,
    private route: ActivatedRoute,
    private router: Router, private districtService: DistrictService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.districtService.listar().subscribe(data => { this.listaDistrict = data });
  }
  aceptar() {
    if (this.direction.nurbanizacion.length > 0 && this.idDistrictSeleccionado > 0) {
      let d = new District();
      d.idDistric = this.idDistrictSeleccionado;
      this.direction.district = d;
      if (this.edicion) {
        this.directionService.modificar(this.direction).subscribe(data => {
          this.directionService.listar().subscribe(data => {
            this.directionService.setLista(data);
          })
        })
      } else {
        this.directionService.insertar(this.direction).subscribe(data => {
          this.directionService.listar().subscribe(data => {
            this.directionService.setLista(data);
          })
        })
      }
      this.router.navigate(['direction']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.directionService.listarId(this.id).subscribe(data => {
        this.direction = data
        console.log(data);
        this.idDistrictSeleccionado = data.district.idDistric;
      });

    }

  }

}
