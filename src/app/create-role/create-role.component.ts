import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ListService } from '../list.service';
import { RolesService } from '../role.service';


@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  userName: any;
  data={
    "active": true,
    "tenant_id": 23,
    "name": "",
    "first_name":"",
    "last_name":"",
    "email":"",
    "phone":"",
  }
  name: string | undefined;
  role: string | undefined;
  role_id: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phno: string | undefined;
  demodata: any;
  

  constructor(private user_roles:RolesService, private router: Router) { }

  ngOnInit(): void {
   
  }



  createRole() {
  
    
     

      // this.name = (<HTMLSelectElement>document.getElementById('roll')).value;
      // console.log(this.role)

      var demodata = window.localStorage.getItem('userData');
      let s = demodata;
      var d = JSON.parse("" + s);
  
  
  
     
    this.name = (<HTMLSelectElement>document.getElementById('username')).value;
    this.data.name = this.name;
    console.log(this.name)
   


    this.firstName = (<HTMLSelectElement>document.getElementById('first_name')).value;
    this.data.first_name = this.firstName;
    console.log(this.firstName)

    this.lastName = (<HTMLSelectElement>document.getElementById('last_name')).value;
    this.data.first_name = this.lastName;
    console.log(this.lastName)

    this.email = (<HTMLSelectElement>document.getElementById('email')).value;
    this.data.email = this.email;
    console.log(this.email)

   

    this.phno = (<HTMLSelectElement>document.getElementById('phone')).value;
    this.data.phone = this.phno;
    console.log(this.phno)

    this.role = (<HTMLSelectElement>document.getElementById('role_id')).value;
    this.data.name = this.role;
    console.log(this.role)


    this.user_roles.createRole(this.data).subscribe((result:any)=>{
      this.router.navigateByUrl('/user-list');
    })

  
    
    

 


  }
}
