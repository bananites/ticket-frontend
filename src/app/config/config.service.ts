import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private apiUrl = environment.apiUrl;

  getApiUrl(): string {
    return this.apiUrl;
  }
}