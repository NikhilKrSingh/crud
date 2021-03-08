import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { CreateRoleComponent } from './create-role/create-role.component';

import { RoleSearchPipe } from './role-search.pipe';


import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
// import { BarChartComponent } from './bar-chart/bar-chart.component';


import { NgApexchartsModule} from 'ng-apexcharts';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartModule } from "primeng/chart";




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    RoleSearchPipe,
    CreateRoleComponent,
    // BarChartComponent
  ],
  imports: [




    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgApexchartsModule,

    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ChartModule,
    NgApexchartsModule,
 



  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
  AppComponent: any
}
