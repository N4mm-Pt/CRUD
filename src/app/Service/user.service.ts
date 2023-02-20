import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
  }

  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  GetToken(){
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):"";
  }

  Registeration(inputdata: any){
    
  }
}


