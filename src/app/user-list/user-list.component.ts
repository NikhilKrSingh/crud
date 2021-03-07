import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';

import { RolesService } from '../role.service';







@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  data: any = [];
  id: any;
  role: any;
  userData: any;

 
  totalRecords: any
  page: number = 1;
  searchValue: any
  order: any;

  constructor( private router: Router,private user_roles:RolesService ) { }

  ngOnInit(): void {
    
    this.user_roles.getUserList().subscribe((result: any) => {
      console.log(result.data);
      const data = result.data;
      // this.response = response.data.roleList[0]
      this.data = data.userList;
      console.log(data);
    });
  }

  editPage(data: object): void{
      // console.log(data, "aa");
      localStorage.setItem('userData', JSON.stringify(data));
      this.router.navigate(['/create-user']);
  }


  







  deactivateRole(id: any) {
    // this.loadData();
    console.log(id)
    let roleData;

    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id == id) {
        console.log(this.data[i]);
        roleData = this.data[i];
      }
    }

    if(roleData.active==true){
    roleData.active=false;
    }
    else{
      roleData.active=true;
    }
    this.user_roles.updateRole(roleData).subscribe((result:any)=>{
      this.ngOnInit();
     
    })




  }}