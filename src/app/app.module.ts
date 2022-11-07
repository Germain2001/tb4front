import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DepartmentComponent } from './page/department/department.component';
import { DeparmentListarComponent } from './page/department/deparment-listar/deparment-listar.component';
import { DepartmentEditarComponent } from './page/department/department-editar/department-editar.component';
import { DepartmentBuscarComponent } from './page/department/department-buscar/department-buscar.component';
import { DepartmentInsertComponent } from './page/department/department-insert/department-insert.component';
import { DepartmentDialogoComponent } from './page/department/deparment-listar/department-dialogo/department-dialogo.component';

import { ProvinceComponent } from './page/province/province.component';
import { ProvinceListarComponent } from './page/province/province-listar/province-listar.component';
import { ProvinceInsertComponent } from './page/province/province-insert/province-insert.component';
import { ProvinceDialogoComponent } from './page/province/province-listar/province-dialogo/province-dialogo.component';

import { AddressComponent } from './page/address/address.component';
import { AddressListarComponent } from './page/address/address-listar/address-listar.component';

import { DistrictComponent } from './page/district/district.component';
import { DistrictListarComponent } from './page/district/district-listar/district-listar.component';

import { PersonComponent } from './page/person/person.component';
import { PersonListarComponent } from './page/person/person-listar/person-listar.component';

import { ComplaintComponent } from './page/complaint/complaint.component';
import { ComplaintListarComponent } from './page/complaint/complaint-listar/complaint-listar.component';
import { ComplaintInsertComponent } from './page/complaint/complaint-insert/complaint-insert.component';
import { ComplaintBuscarComponent } from './page/complaint/complaint-buscar/complaint-buscar.component';

import { UserComponent } from './page/user/user.component';
import { UserListarComponent } from './page/user/user-listar/user-listar.component';

import { PolicestationComponent } from './page/policestation/policestation.component';
import { PolicestationListarComponent } from './page/policestation/policestation-listar/policestation-listar.component';
import { PolicestationInsertComponent } from './page/policestation/policestation-insert/policestation-insert.component';
import { PolicestationBuscarComponent } from './page/policestation/policestation-buscar/policestation-buscar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table'
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RolComponent } from './page/rol/rol.component';


import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginComponent } from './page/login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { ProvinceBuscarComponent } from './page/province/province-buscar/province-buscar.component';
import { DistrictInsertComponent } from './page/district/district-insert/district-insert.component';
import { DistrictBuscarComponent } from './page/district/district-buscar/district-buscar.component';
import { DistrictDialogoComponent } from './page/district/district-listar/district-dialogo/district-dialogo.component';
import { NavbarlComponent } from './page/navbarl/navbarl.component';
import { ComplaintDialogoComponent } from './page/complaint/complaint-listar/complaint-dialogo/complaint-dialogo.component';
import { DriverComponent } from './page/driver/driver.component';
import { PedestrianComponent } from './page/pedestrian/pedestrian.component';
import { ZoneComponent } from './page/zone/zone.component';
import { DirectionComponent } from './page/direction/direction.component';
import { ZoneListarComponent } from './page/zone/zone-listar/zone-listar.component';
import { ZoneDialogoComponent } from './page/zone/zone-listar/zone-dialogo/zone-dialogo.component';
import { ZoneInsertComponent } from './page/zone/zone-insert/zone-insert.component';
import { ZoneBuscarComponent } from './page/zone/zone-buscar/zone-buscar.component';
import { DirectionListarComponent } from './page/direction/direction-listar/direction-listar.component';
import { DirectionDialogoComponent } from './page/direction/direction-listar/direction-dialogo/direction-dialogo.component';
import { DirectionInsertComponent } from './page/direction/direction-insert/direction-insert.component';
import { DirectionBuscarComponent } from './page/direction/direction-buscar/direction-buscar.component';
import { PedestrianListarComponent } from './page/pedestrian/pedestrian-listar/pedestrian-listar.component';
import { PedestrianDialogoComponent } from './page/pedestrian/pedestrian-listar/pedestrian-dialogo/pedestrian-dialogo.component';
import { PedestrianInsertComponent } from './page/pedestrian/pedestrian-insert/pedestrian-insert.component';
import { PedestrianBuscarComponent } from './page/pedestrian/pedestrian-buscar/pedestrian-buscar.component';
import { DriverListarComponent } from './page/driver/driver-listar/driver-listar.component';
import { DriverDialogoComponent } from './page/driver/driver-listar/driver-dialogo/driver-dialogo.component';
import { DriverInsertComponent } from './page/driver/driver-insert/driver-insert.component';
import { DriverBuscarComponent } from './page/driver/driver-buscar/driver-buscar.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';




@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DeparmentListarComponent,
    ProvinceComponent,
    ProvinceListarComponent,
    AddressComponent,
    AddressListarComponent,
    DistrictComponent,
    DistrictListarComponent,
    PersonComponent,
    PersonListarComponent,
    ComplaintComponent,
    ComplaintListarComponent,
    PolicestationComponent,
    PolicestationListarComponent,
    UserComponent,
    UserListarComponent,
    DepartmentInsertComponent,
    RolComponent,
    DepartmentEditarComponent,
    DepartmentBuscarComponent,
    DepartmentDialogoComponent,
    ProvinceInsertComponent,
    LoginComponent,
    ProvinceDialogoComponent,
    ProvinceBuscarComponent,
    DistrictInsertComponent,
    DistrictBuscarComponent,
    DistrictDialogoComponent,
    NavbarlComponent,
    PolicestationInsertComponent,
    PolicestationBuscarComponent,
    ComplaintDialogoComponent,
    ComplaintBuscarComponent,
    ComplaintInsertComponent,
    DriverComponent,
    PedestrianComponent,
    ZoneComponent,
    DirectionComponent,
    ZoneListarComponent,
    ZoneDialogoComponent,
    ZoneInsertComponent,
    ZoneBuscarComponent,
    DirectionListarComponent,
    DirectionDialogoComponent,
    DirectionInsertComponent,
    DirectionBuscarComponent,
    PedestrianListarComponent,
    PedestrianDialogoComponent,
    PedestrianInsertComponent,
    PedestrianBuscarComponent,
    DriverListarComponent,
    DriverDialogoComponent,
    DriverInsertComponent,
    DriverBuscarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
