import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
  responseType: 'json' as const,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getAdminBoard(): Observable<any> {

    return this.http.get<User>(environment.apiUrl + '/v1/users', httpOptions);
  }

  getAllUser(): Observable<User[]> {

    return this.http.get<User[]>(environment.apiUrl + '/v1/users', httpOptions);
  }
}
