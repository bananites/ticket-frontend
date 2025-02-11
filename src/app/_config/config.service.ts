import { Injectable } from '@angular/core';
import { environment } from '../../_environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private apiUrl = environment.apiUrl;

  getApiUrl(): string {
    return this.apiUrl;
  }
}