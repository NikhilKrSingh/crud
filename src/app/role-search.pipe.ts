import { Pipe, PipeTransform } from '@angular/core';
import { RolesService } from './role.service';


@Pipe({
  name: 'roleSearch'
})
export class RoleSearchPipe implements PipeTransform {
  data: any = [];
  totalRecords: String;
  searchValue: String;

  constructor(private user_roles: RolesService) {
    this.totalRecords = new String;
    this.searchValue = new String;
  }


  transform(user: any[], searchValue: string): any { 
    this.user_roles.getUserList().subscribe((result: any) => {
      let user = result['data'];
      this.data = user['name']
    })

    if(!user || !searchValue){
      return user;
    }

    return user.filter(user=>
    
        user.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
        user.first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
        user.last_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
        user.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
        user.phone.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
  }

}
