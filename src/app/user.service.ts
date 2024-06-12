import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/user';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  RegisterUser = (datauser: IUser): Observable<any> => {
    return this.http.post(this.API_URL + '/register', datauser);
  };
  UserLogin = (datauser: IUser): Observable<any> => {
    return this.http.post(this.API_URL + '/login', datauser);
  };
  // CheckUserValid = (): boolean => {
  //   let check = false;
  //   try {
  //     const userinfo: any = localStorage.getItem('user');

  //     if (userinfo !== null) {
  //       const user = JSON.parse(userinfo);
  //       const userobj = jwtDecode(user?.token);
  //       if (
  //         (userobj.sub as any) == 1 &&
  //         (userobj.exp as any) > Date.now() / 1000
  //       ) {
  //         check = true;
  //       }
  //     }
  //   } catch (error) {
  //     return false;
  //   }
  //   return check;
  // };
}
