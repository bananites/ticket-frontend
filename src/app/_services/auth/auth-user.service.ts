import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../_environments/environment';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService

  ) { }



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

  // TODO Return type

  logout(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }

    return this.http.post(environment.apiUrl + '/v1/auth/logout', httpOptions);

  }



   refreshToken(): Observable<String> {
    const sessionStorage = this.storageService.getSession()

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage?.refreshToken,
      }),
      responseType: 'json' as const,


    }
    return this.http.get<String>(environment.apiUrl + '/v1/auth/refresh', httpOptions);

  }

}
