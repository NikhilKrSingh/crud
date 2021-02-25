import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
// tslint:disable-next-line:import-spacing
import { CreateUserComponent }from './create-user/create-user.component';
import { NewUserComponent } from './new-user/new-user.component';


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
  path: 'new-user',
  component: NewUserComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
