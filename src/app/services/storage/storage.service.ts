import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

export interface SessionStorage {
  email: string,
  accessToken: string,
  refreshToken: string,

}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveSession(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

  }

  public getSession(): SessionStorage | undefined {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return;
  }

  public isLoggedOn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return true;
    }
    return false;
  }
}
