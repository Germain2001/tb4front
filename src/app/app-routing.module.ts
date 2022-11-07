import { DirectionBuscarComponent } from './page/direction/direction-buscar/direction-buscar.component';
import { DirectionInsertComponent } from './page/direction/direction-insert/direction-insert.component';
import { ZoneBuscarComponent } from './page/zone/zone-buscar/zone-buscar.component';
import { ZoneInsertComponent } from './page/zone/zone-insert/zone-insert.component';
import { DirectionComponent } from './page/direction/direction.component';
import { PolicestationBuscarComponent } from './page/policestation/policestation-buscar/policestation-buscar.component';
import { PolicestationInsertComponent } from './page/policestation/policestation-insert/policestation-insert.component';
import { NavbarlComponent } from './page/navbarl/navbarl.component';
import { DistrictBuscarComponent } from './page/district/district-buscar/district-buscar.component';
import { DistrictInsertComponent } from './page/district/district-insert/district-insert.component';
import { ProvinceBuscarComponent } from './page/province/province-buscar/province-buscar.component';
import { LoginComponent } from './page/login/login.component';
import { DepartmentBuscarComponent } from './page/department/department-buscar/department-buscar.component';
import { DepartmentEditarComponent } from './page/department/department-editar/department-editar.component';
import { ProvinceComponent } from './page/province/province.component';
import { DepartmentComponent } from './page/department/department.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './page/address/address.component';
import { DistrictComponent } from './page/district/district.component';
import { PersonComponent } from './page/person/person.component';
import { UserComponent } from './page/user/user.component';
import { ComplaintComponent } from './page/complaint/complaint.component';
import { ComplaintInsertComponent } from './page/complaint/complaint-insert/complaint-insert.component';
import { ComplaintBuscarComponent } from './page/complaint/complaint-buscar/complaint-buscar.component';
import { PolicestationComponent } from './page/policestation/policestation.component';
import { DepartmentInsertComponent } from './page/department/department-insert/department-insert.component';
import { ProvinceInsertComponent } from './page/province/province-insert/province-insert.component';
import { ZoneComponent } from './page/zone/zone.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [{
  path: 'department', component: DepartmentComponent, children: [
    {path: 'new', component: DepartmentInsertComponent},
    {path: 'modificar/:id', component: DepartmentEditarComponent},
    {path: 'buscar', component: DepartmentBuscarComponent}
  ]
},
{
  path: 'province', component: ProvinceComponent, children: [
    {path: 'new', component: ProvinceInsertComponent},
    {path: 'modificar/:id', component: ProvinceInsertComponent},
    {path: 'buscar', component: ProvinceBuscarComponent}
  ]
},
{
  path: 'address', component: AddressComponent, children: [
  ]
},
{
  path: 'district', component: DistrictComponent, children: [
    {path: 'new', component: DistrictInsertComponent},
    {path: 'modificar/:id', component: DistrictInsertComponent},
    {path: 'buscar', component: DistrictBuscarComponent}
  ]
},
{
  path: 'person', component: PersonComponent, children: []
},
{
  path: 'user', component: UserComponent, children: []
},
{
  path: 'complaint', component: ComplaintComponent, children: [
    {path: 'new',component: ComplaintInsertComponent},
    {path: 'modificar/:id', component: ComplaintInsertComponent},
    {path: 'buscar', component: ComplaintBuscarComponent}
  ]
},
{
  path: 'policestation', component: PolicestationComponent, children: [
    {path: 'new',component: PolicestationInsertComponent},
    {path: 'modificar/:id', component: PolicestationInsertComponent},
    {path: 'buscar', component: PolicestationBuscarComponent}
  ]
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'navbarl', component: NavbarlComponent, children: []
},
{
  path: 'zone', component: ZoneComponent, children: [
    {path: 'new',component: ZoneInsertComponent},
    {path: 'modificar/:id', component: ZoneInsertComponent},
    {path: 'buscar', component: ZoneBuscarComponent}
  ]
},
{
  path: 'direction', component: DirectionComponent, children: [
    {path: 'new',component: DirectionInsertComponent},
    {path: 'modificar/:id', component: DirectionInsertComponent},
    {path: 'buscar', component: DirectionBuscarComponent}
  ]
},
{
  path: 'landingPage', component: LandingPageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
