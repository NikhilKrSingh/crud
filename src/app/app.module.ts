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



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    RoleSearchPipe,
    CreateRoleComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
   
    Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
