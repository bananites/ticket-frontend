import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { environment } from '../../../../../_environments/environment';

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
