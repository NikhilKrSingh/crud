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


  transform(users: any[], searchValue: string): any { 
    this.user_roles.getRoles().subscribe((result: any) => {
      let data = result['data'];
      this.data = data['roleList']
    })

    if(!users || !searchValue){
      return users;
    }

    return users.filter(users=>
      users.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}
