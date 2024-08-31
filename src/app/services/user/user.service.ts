import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //TODO think about authorization
        //
      }),
      responseType: 'json' as const,
    };

    return this.http.get<User[]>(environment.apiUrl + '/v1/users', httpOptions);
  }
}
