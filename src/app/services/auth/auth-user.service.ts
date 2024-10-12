import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(private http: HttpClient) {}

  authUser(email: string, password: string): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams().set('email', email).set('password', password),
      responseType: 'json' as const,
    };

      return this.http.post<String>(
       environment.apiUrl + '/v1/auth/signin',
      httpOptions,
     );
  }
}
