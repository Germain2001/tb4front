import { ZoneService } from './../../../service/zone.service';
import { Zone } from './../../../model/zone';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-zone-insert',
  templateUrl: './zone-insert.component.html',
  styleUrls: ['./zone-insert.component.css']
})
export class ZoneInsertComponent implements OnInit {
  zone: Zone = new Zone();
  id: number = 0;
  edicion: boolean = false;
  mensaje: string = "";

  constructor(private zoneService: ZoneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }
  aceptar() {
    if (this.zone.nzone.length > 0 ) {
      if (this.edicion) {
        this.zoneService.modificar(this.zone).subscribe(data => {
          this.zoneService.listar().subscribe(data => {
            this.zoneService.setLista(data);
          })
        })
      } else {
        this.zoneService.insertar(this.zone).subscribe(data => {
          this.zoneService.listar().subscribe(data => {
            this.zoneService.setLista(data);
          })
        })
      }
      this.router.navigate(['zone']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

  init() {
    if (this.edicion) {
      this.zoneService.listarId(this.id).subscribe(data => {
        this.zone = data
      });

    }

  }

}
