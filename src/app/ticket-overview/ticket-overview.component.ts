import { Component, inject } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { DatePipe, JsonPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Ticket } from '../models/ticket';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { log } from 'node:console';


@Component({
  selector: 'app-ticket-overview',
  standalone: true,
  imports: [JsonPipe, RouterModule, MatCheckboxModule, MatButtonModule, MatListModule, MatTableModule, MatIconModule, MatDividerModule, DatePipe, HttpClientModule],
  templateUrl: './ticket-overview.component.html',
  styleUrl: './ticket-overview.component.scss'
})
export class TicketOverviewComponent {

  displayedColumns: string[] = ['select', 'title', 'owner', 'status', 'updated', 'created'];

  httpClient = inject(HttpClient)
  public tickets: Array<Ticket> =  []

  ngOnInit(){
    this.httpClient.get('http://localhost:3000/api/v1/ticket').subscribe({
      next: (tickets: any) => {
        
        this.tickets = tickets;
      }, error: (err) => console.log(err)
    })
  }

  getOwnerName(user: any): string | undefined{
     if(!user){
      return
     }
    return user.firstname + " " + user.lastname
  }



}
