import { District } from "./district";

export class Address{
    id:number=0;
    NUrb:string="";
    NStreet:string="";
    NBlock:string="";
    NLot:number=0;
    district:District = new District();
}
