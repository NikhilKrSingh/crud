import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RolesService {


  constructor(private http: HttpClient) { }

  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNTM1MjYwNywiZXhwIjoxNjE1MzYyNjA3fQ.J3bqVq1A6zql8OLNnkCuLG_Qrdk3dHuvlYbGFAf09iw'

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
   
    const url = ' http://devourin-api-qa.chain-expert.com/v1/updateuser';
    

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.put<any[]>(url, userData, { headers: reqHeader });
  }


  

  createRole(data: any){

    const url = 'http://devourin-api-qa.chain-expert.com/v1/register'
   
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });
    return this.http.post<any[]>(url, data, { headers: reqHeader });
  }

  updateSeries(){
    
const url = 'http://devourin-api-qa.chain-expert.com/report/getdashboardtotalsalevsorder?tenant_id=23&branch_id=-1&branchBrand_id=-1&start_date=2020-6-15&end_date=2020-6-30'
    
var reqHeader = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
  }


}