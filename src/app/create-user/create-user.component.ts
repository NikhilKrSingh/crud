import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';

import { RolesService } from '../role.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  name: string | undefined;
  role: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phno: string | undefined;
  demodata: any;
  data: any;

  constructor(private user_roles:RolesService, private route: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = '';
    var demodata = window.localStorage.getItem('userData');
    let s = demodata;
    var d = JSON.parse("" + s);
    this.data = d;
    this.name = d.username;
    this.phno = d.phone;
    this.email = d.email;
    this.firstName = d.first_name;
    this.lastName = d.last_name;
    this.role = d.role_id;
    // console.log(d,"qq");
  }

  onSubmit() {

  


    this.name = (<HTMLSelectElement>document.getElementById('username')).value;
    
    // console.log(this.name)



    this.firstName = (<HTMLSelectElement>document.getElementById('first_name')).value;
 
    // console.log(this.firstName)

    this.lastName = (<HTMLSelectElement>document.getElementById('last_name')).value;
   
    // console.log(this.lastName)

    this.email = (<HTMLSelectElement>document.getElementById('email')).value;
 
    // console.log(this.email)



    this.phno = (<HTMLSelectElement>document.getElementById('phone')).value;
  
    // console.log(this.phno)

    this.role = (<HTMLSelectElement>document.getElementById('role_id')).value;
   
    // console.log(this.role)


    
      this.data.role_id= this.role;
      this.data.username= this.name,
      this.data.first_name= this.firstName,
      this.data.last_name= this.lastName,
      this.data.email= this.email,
      this.data.phone= this.phno;
      this.data.updatedAt = new Date().toISOString();
  // console.log("ts data", this.data);

 


    this.user_roles.updateRole(this.data).subscribe((result: any) => {
      this.route.navigateByUrl('/user-list');

     
    }
 ) }


}