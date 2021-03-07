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
  data= {
    is_reset_password: false,
    active: true,
    tenant_id: 23,
    role_id: 0,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    created_by: "",
    updated_by: "",
    updatedAt: "",
    createdAt: ""
  
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
  
    //  console.log("data");
    this.data.username = (<HTMLSelectElement>document.getElementById('username')).value;
    //this.data.username = this.name;
    // console.log(this.data.username)
   


    this.data.first_name = (<HTMLSelectElement>document.getElementById('first_name')).value;
    //this.data.first_name = this.firstName;
    // console.log(this.firstName)

    this.data.last_name= (<HTMLSelectElement>document.getElementById('last_name')).value;
    //this.data.first_name = this.lastName;
    // console.log(this.lastName)

    this.data.email = (<HTMLSelectElement>document.getElementById('email')).value;
    //this.data.email = this.email;
    // console.log(this.email)

   

    this.data.phone = (<HTMLSelectElement>document.getElementById('phone')).value;
    //this.data.phone = this.phno;
    // console.log(this.phno)

    this.data.role_id =parseInt((<HTMLSelectElement>document.getElementById('role_id')).value);
    console.log(this.role)
    var date = new Date().toISOString();
    console.log(date);
    this.data.createdAt = date;
    this.data.updatedAt = date;

    this.user_roles.createRole(this.data).subscribe((result:any)=>{
      this.router.navigateByUrl('/user-list');
    })

  
    
    

 


  }
}
