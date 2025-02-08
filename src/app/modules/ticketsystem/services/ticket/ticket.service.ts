import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "./../../../environments/environment";
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) { }


  postTicket(ticket: Ticket): Observable<any> {

    const sessionStorage = this._storageService.getSession()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage?.accessToken}`
      }),
      params: new HttpParams().set('ownerId', ticket.getCreatedBy).set('title', ticket.getTitle).set('description', ticket.getDescription),
      responseType: 'json' as const,
    };

    return this.http.post<any>(environment.apiUrl + "/v1/ticket", ticket, httpOptions)

  }

  getTicketById(id: string): Observable<Ticket> {
    const sessionStorage = this._storageService.getSession()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage?.accessToken}`

      }),

      responseType: 'json' as const,
    };

    return this.http.get<Ticket>(environment.apiUrl + `/v1/ticket/${id}`, httpOptions)
  }

  getAllTickets(): Observable<Ticket[]> {
    const sessionStorage = this._storageService.getSession()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage?.accessToken}`
      }),
      responseType: 'json' as const,
    };
    return this.http.get<Ticket[]>(environment.apiUrl + "/v1/ticket", httpOptions)

  }





}
