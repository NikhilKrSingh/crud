import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RolesService {


  constructor(private http: HttpClient) { }

  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNTE5MDI5NiwiZXhwIjoxNjE1MjAwMjk2fQ.jt8sfOXnOqvAKfRukM9z8X1k8KcbPVS0SxiJyHgWnc0'


  getRoles() {
    const url = 'http://devourin-api-qa.chain-expert.com/role/getrolelist?recordsTofetch=1&tenant_id=23'
    
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }



  getUInactive() {
    const url = 'http://devourin-api-qa.chain-expert.com/role/getrolelist?recordsTofetch=2&tenant_id=23'
    
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }



 

  getUserList() {
    const url = 'http://devourin-api-qa.chain-expert.com/v1/getuserlist?recordsTofetch=1&tenant_id=23';
    
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }


  updateRole(userData: any) {
    // console.log('coming data', userData);
    const url = ' http://devourin-api-qa.chain-expert.com/v1/updateuser';
    

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.put<any[]>(url, userData, { headers: reqHeader });
  }


  
  updateData(userData: any) {
    // console.log('coming');
    const url = 'http://devourin-api-qa.chain-expert.com/v1/updateuser';
    

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    console.log('middle');

    
    return this.http.put<any>(url, userData, { headers: reqHeader });
    
    
  }

  createRole(data: any){
    // console.log("create role data", data);
    const url = 'http://devourin-api-qa.chain-expert.com/v1/register'
   
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.post<any[]>(url, data, { headers: reqHeader });
  }













  

}
