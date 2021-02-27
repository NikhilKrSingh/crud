import { HttpClientModule } from '@angular/common/http';
import { NgModule, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { CreateRoleComponent } from './create-role/create-role.component';

import { RoleSearchPipe } from './role-search.pipe';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ApexReportComponent } from './apex-report/apex-report.component';
import { NgApexchartsModule, ApexChart } from 'ng-apexcharts';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    RoleSearchPipe,
    CreateRoleComponent,
    ApexReportComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgApexchartsModule,
    Ng2SearchPipeModule
    ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
