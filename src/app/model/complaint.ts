import { Zone } from 'src/app/model/zone';
import { PoliceStation } from "./policestation";
//import { Zone } from "./zone";

export class Complaint {
    idComplaint:number=0;
    ncomplaint:string="";
    policeStation:PoliceStation = new PoliceStation();
    zone:Zone = new Zone();

}
