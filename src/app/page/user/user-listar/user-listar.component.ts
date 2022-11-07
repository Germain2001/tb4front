import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatTableDataSource} from '@angular/material/table'
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.css']
})
export class UserListarComponent implements OnInit {
dataSource:MatTableDataSource<User>=new MatTableDataSource();
displayedColumns:string[]=['id','user', 'pass'];
  constructor(private ps:UserService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);


    })
  }

}
