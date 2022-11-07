import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/service/address.service';
import {MatTableDataSource} from '@angular/material/table'
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-address-listar',
  templateUrl: './address-listar.component.html',
  styleUrls: ['./address-listar.component.css']
})
export class AddressListarComponent implements OnInit {
dataSource:MatTableDataSource<Address>=new MatTableDataSource();
displayedColumns:string[]=['id','urba', 'calle','bloque','lote', 'distrito'];
  constructor(private ps:AddressService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);


    })
  }

}
