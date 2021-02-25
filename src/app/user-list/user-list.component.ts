import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // [x: string]: any;tutorials: Tutorial[] = [];

  data: any = [];
  id: any;
  role: any;
  // roleList: any;
  // username: any;
  // firstName: any;
  // lastName: any;
  // phone: any;
  // email: any;
  // dataAccess: any;
  // http: any;
  // totalRecords: Number

  // tslint:disable-next-line:variable-name
  constructor(private user_list: ListService, private router: Router) { }

  ngOnInit(): void {

    this.user_list.getUserList().subscribe((result: any) => {
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


  deleteuser(id: any){
    //console.log(id);


    this.user_list.getUserList().subscribe((result: any) => {
      const data = result.data;
      this.data = data.userList;
    });

    let userData;

    for(var i=0;i< this.data.length;i++){
      if(this.data[i].role_id == this.role) {
        console.log(this.data[i]);
        userData =this.data[i];
      }
    }

    if (userData.active==true){
      userData.active=false;
    }
    else{
      userData.active=true;
    }
    this.user_list.updateRole(userData).subscribe((result:any)=>{
      //this.ngOnInit();
    })
  }
 }



