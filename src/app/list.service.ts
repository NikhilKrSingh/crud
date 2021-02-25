import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) {
    this.url = 'http://devourin-api-qa.chain-expert.com/v1/getuserlist?recordsTofetch=1&tenant_id=23';
   }


  status!: string;
  dialog: any;
  workspace: any;
  httpClient: any;
  url: string;
  token!: string[] ;
  post: any;


 // tslint:disable-next-line:typedef
 getUserList()
  {
    const url = 'http://devourin-api-qa.chain-expert.com/v1/getuserlist?recordsTofetch=1&tenant_id=23';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNDIzMzk2NywiZXhwIjoxNjE0MjQzOTY3fQ.pzEXQxblR66552YEdg3JF8-6etgWA3A1mgfwJyMvnY0';

    const reqHeader = new HttpHeaders({
      'content-Type': 'application/json',
      Authorization: token
    });
    return this.http.get<any[]>(url, {headers: reqHeader});
  }


  updateRole(userData:any)
  {
   
    const url = ' http://devourin-api-qa.chain-expert.com/v1/updateuser';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNDIzMzk2NywiZXhwIjoxNjE0MjQzOTY3fQ.pzEXQxblR66552YEdg3JF8-6etgWA3A1mgfwJyMvnY0';


    var reqHeader = new HttpHeaders({
      'content-Type': 'application/json',
      Authorization: this.token
    });
    return this.http.put<any[]>(url, userData,{headers: reqHeader});
  }

// tslint:disable-next-line:typedef
// editUserList(Uid: any)
// {
//   const url = 'http://devourin-api-qa.chain-expert.com/v1/getuserlist?recordsTofetch=1&tenant_id=' +Uid;
// tslint:disable-next-line:max-line-length
//   const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNDEwMTgyOSwiZXhwIjoxNjE0MTExODI5fQ.hhhXnO5lCVsnERaQPVLN5SDycplk3RZo2M2fWix73Q0';

//   const reqHeader = new HttpHeaders({
//     'content-Type': 'application/json',
//     Authorization: token
//   });
//   return this.http.get<any[]>(url, {headers: reqHeader});
// }


// tslint:disable-next-line:typedef
// delete(id: number){
//   const url = 'http:// devourin-api-qa.chain-expert.com/v1/updateuser';
//   console.log(id);
//   return this.http.delete(`${this.url}/${id}`);
// }

}
