import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import {MatTableDataSource} from '@angular/material/table'
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person-listar',
  templateUrl: './person-listar.component.html',
  styleUrls: ['./person-listar.component.css']
})
export class PersonListarComponent implements OnInit {
dataSource:MatTableDataSource<Person>=new MatTableDataSource();
displayedColumns:string[]=['id','name', 'ape','anio','mail','direc'];
  constructor(private ps:PersonService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);


    })
  }

}
