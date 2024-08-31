import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(
    private http: HttpClient
  ) { }

  authUser(email: string, password: string): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('email', email).set('password', password),
      responseType: 'json' as const,
    };
    console.log(httpOptions)

    return this.http.post<String>(environment.apiUrl + '/v1/auth/signin', httpOptions);
  }
}
