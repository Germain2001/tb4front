import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarl',
  templateUrl: './navbarl.component.html',
  styleUrls: ['./navbarl.component.css']
})
export class NavbarlComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
