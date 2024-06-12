import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API_URL = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) { }
  Get_All_Categories = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };
  Get_Categories_By_ID = (id: string): Observable<any> => {
    return this.http.get(this.API_URL + `/${id}`);
  };
  AddCategory = (data: ICategory): Observable<any> => {
    return this.http.post(this.API_URL, data);
  };
}
