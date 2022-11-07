import { DirectionService } from './../../../service/direction.service';
import { Direction } from './../../../model/direction';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PoliceStation } from 'src/app/model/policestation';
import { PolicestationService } from 'src/app/service/policestation.service';
import { Address } from 'src/app/model/address';
import { AddressService } from 'src/app/service/address.service';


@Component({
  selector: 'app-policestation-insert',
  templateUrl: './policestation-insert.component.html',
  styleUrls: ['./policestation-insert.component.css']
})
export class PolicestationInsertComponent implements OnInit {
  policestation: PoliceStation = new PoliceStation();
  id: number = 0;
  edicion: boolean = false;
  listaAddress: Direction[] = [];
  idAddressSeleccionado: number = 0;
  mensaje: string = "";
  constructor(
    private policestationService: PolicestationService,
    private route: ActivatedRoute,
    private router: Router,
    private directionService: DirectionService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.directionService.listar().subscribe(data => { this.listaAddress = data });
  }
  aceptar() {
    if (this.policestation.npoliceStation.length > 0 && this.idAddressSeleccionado > 0) {
      let p = new Direction();
      p.idDirection = this.idAddressSeleccionado;
      this.policestation.direction = p;

      if (this.edicion) {
        this.policestationService.modificar(this.policestation).subscribe(data => {
          this.policestationService.listar().subscribe(data => {
            this.policestationService.setLista(data);
          })
        })
      } else {
        this.policestationService.insertar(this.policestation).subscribe(data => {
          this.policestationService.listar().subscribe(data => {
            this.policestationService.setLista(data);
          })
        })
      }
      this.router.navigate(['policestation']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }

  }

  init() {
    if (this.edicion) {
      this.policestationService.listarId(this.id).subscribe(data => {
        this.policestation = data
        console.log(data);
        this.idAddressSeleccionado = data.direction.idDirection;
      });

    }

  }

}
