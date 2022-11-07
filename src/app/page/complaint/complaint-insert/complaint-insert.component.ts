import { Zone } from 'src/app/model/zone';
import { ZoneService } from './../../../service/zone.service';

import { Complaint } from './../../../model/complaint';
import { ComplaintService } from './../../../service/complaint.service';
import { PolicestationService } from './../../../service/policestation.service';
import { PoliceStation } from './../../../model/policestation';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complaint-insert',
  templateUrl: './complaint-insert.component.html',
  styleUrls: ['./complaint-insert.component.css']
})

export class ComplaintInsertComponent implements OnInit {
  complaint: Complaint = new Complaint();
  id: number = 0;
  edicion: boolean = false;
  listaPolicestation: PoliceStation[] = [];
  idPoliceStationSeleccionado: number = 0;
  listaZone: Zone[] = [];
  idZoneSeleccionado:number = 0;
  mensaje: string = "";

  constructor(private complaintService: ComplaintService,
    private route: ActivatedRoute,
    private router: Router, private policestationService: PolicestationService, private zoneService:ZoneService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.policestationService.listar().subscribe(data => { this.listaPolicestation = data });
    this.zoneService.listar().subscribe(data => { this.listaZone = data });
  }

  aceptar() {
    if (this.complaint.ncomplaint.length > 0 && this.idPoliceStationSeleccionado > 0 && this.idZoneSeleccionado > 0) {
      let p = new PoliceStation();
      let z = new Zone();
      p.idPoliceStation = this.idPoliceStationSeleccionado;
      z.idZone = this.idZoneSeleccionado;

      this.complaint.zone = z;
      this.complaint.policeStation = p;

      if (this.edicion) {
        this.complaintService.modificar(this.complaint).subscribe(data => {
          this.complaintService.listar().subscribe(data => {
            this.complaintService.setLista(data);
          })
        })
      } else {
        this.complaintService.insertar(this.complaint).subscribe(data => {
          this.complaintService.listar().subscribe(data => {
            this.complaintService.setLista(data);
          })
        })
      }
      this.router.navigate(['complaint']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }
  init() {
    if (this.edicion) {
      this.complaintService.listarId(this.id).subscribe(data => {
        this.complaint = data
        console.log(data);
        this.idPoliceStationSeleccionado = data.policeStation.idPoliceStation;
        this.idZoneSeleccionado = data.zone.idZone;
      });

    }
  }

}
