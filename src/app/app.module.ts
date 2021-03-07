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


import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';








@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    RoleSearchPipe,
    CreateRoleComponent,
    ReportComponent
  
 
    

  ],
  imports: [



    RouterModule.forRoot([]),
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  NgxPaginationModule,
    Ng2SearchPipeModule,
    ChartsModule,
    BrowserAnimationsModule
    ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { 
  AppComponent: any
}
