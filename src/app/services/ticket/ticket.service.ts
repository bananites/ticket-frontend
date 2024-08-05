import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  
  constructor(
    private http: HttpClient
  ) {}
   

  postTicket(ticket: any): Observable<Ticket>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //TODO think about authorization
        // 'Authorization': 'Bearer your-token',
      }),
      params: new HttpParams().set('ownerId', ticket.createdBy).set('title', ticket.title).set('description', ticket.description),
      responseType: 'json' as const,
    };

    return this.http.post<Ticket>(environment.apiUrl + "/v1/ticket",ticket, httpOptions)

  }

}
