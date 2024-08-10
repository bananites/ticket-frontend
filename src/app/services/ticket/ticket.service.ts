import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "./../../../environments/environment";
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  
  constructor(
    private http: HttpClient
  ) {}
   

  postTicket(ticket: any): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //TODO think about authorization
        // 'Authorization': 'Bearer your-token',
      }),
      params: new HttpParams().set('ownerId', ticket.createdBy).set('title', ticket.title).set('description', ticket.description),
      responseType: 'json' as const,
    };

    return this.http.post<any>(environment.apiUrl + "/v1/ticket",ticket, httpOptions)

  }

  getTicketById(id: string): Observable<Ticket>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //TODO think about authorization
        // 'Authorization': 'Bearer your-token',
      }),
      // params: new HttpParams().set('id', id),
      responseType: 'json' as const,
    };

    return this.http.get<any>(environment.apiUrl + `/v1/ticket/${id}`, httpOptions)
  }





}
