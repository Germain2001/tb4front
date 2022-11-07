import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policestation',
  templateUrl: './policestation.component.html',
  styleUrls: ['./policestation.component.css']
})
export class PolicestationComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
