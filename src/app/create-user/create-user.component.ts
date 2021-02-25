import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    name: string | undefined;
    role: string | undefined;
    firstName: string | undefined;
    lastName:string | undefined;
    email: string | undefined;
    phno:string | undefined;
  demodata: any;
  data: any;
    
    constructor(private user_list: ListService) { }
    
    ngOnInit(): void {
      this.name = '';
      var demodata = window.localStorage.getItem('userData');
      let s= demodata;
      var d = JSON.parse(""+s);
      this.name= d.username;
      this.phno = d.phone;
      this.email = d.email;
      this.firstName=d.first_name;
      this.lastName = d.last_name;
      this.role = d.role_id;
      //console.log(this.name,"qq");
    }

    onSubmit() {

      

      this.name=(<HTMLSelectElement>document.getElementById('username')).value;
      console.log(this.name)

      this.firstName=(<HTMLSelectElement>document.getElementById('first_name')).value;
      console.log(this.firstName)

      this.lastName=(<HTMLSelectElement>document.getElementById('last_name')).value;
      console.log(this.lastName)

      this.email=(<HTMLSelectElement>document.getElementById('email')).value;
      console.log(this.email)

      this.phno=(<HTMLSelectElement>document.getElementById('phone')).value;
      console.log(this.phno)

      this.role=(<HTMLSelectElement>document.getElementById('role_id')).value;
      console.log(this.role)

      

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
      userData.role_id=this.role;
      userData.username=this.name;
      userData.first_name= this.firstName;
      userData.last_name=this.lastName;
      userData.email=this.email;
      userData.phone=this.phno;

      console.log(userData)
    }

    // display():void{
    //   console.log("display");
    // }

    
  }



