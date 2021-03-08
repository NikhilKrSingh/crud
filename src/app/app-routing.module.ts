import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
// tslint:disable-next-line:import-spacing
import { CreateUserComponent }from './create-user/create-user.component';
// import { NewUserComponent } from './new-user/new-user.component';
// import './new-user/new-user.component.css';
import { CreateRoleComponent } from './create-role/create-role.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DateRangePickerOverviewExampleComponent } from './date-range-picker-overview-example/date-range-picker-overview-example.component';
// import { ChartComponent } from './Apexchart/chart.component';
// import './report/report.component.css';
// import { ReportComponent } from './report/report.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';




const routes: Routes = [
  

{
  path: 'user-list',
  component: UserListComponent
},

{
  path: 'create-user',
  component: CreateUserComponent
},

{
 path:'create-role',
 component: CreateRoleComponent
},


{
  path:'date-range-picker-overview-example',
  component: DateRangePickerOverviewExampleComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }