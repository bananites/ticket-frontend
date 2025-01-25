import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { env } from 'process';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private http: HttpClient) { }

  authUser(email: string, password: string): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      email: email,
      password: password,
      responseType: 'json' as const,
    };


    return this.http.post<String>(
      environment.apiUrl + '/v1/auth/signin',
      httpOptions
    );
  }

  // TODO add logout


  refreshToken() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(environment.apiUrl + '/v1/auth/refresh', {}, httpOptions);
  }
}
