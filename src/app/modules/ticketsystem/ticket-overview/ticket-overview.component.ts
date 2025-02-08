import { Component, inject } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { DatePipe, JsonPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';


@Component({
  selector: 'app-ticket-overview',
  standalone: true,
  imports: [JsonPipe, RouterModule, MatCheckboxModule, MatButtonModule, MatListModule, MatTableModule, MatIconModule, MatDividerModule, DatePipe, HttpClientModule],
  templateUrl: './ticket-overview.component.html',
  styleUrl: './ticket-overview.component.scss'
})
export class TicketOverviewComponent {

  displayedColumns: string[] = ['select', 'title', 'owner', 'status', 'updated', 'created'];

  public tickets: Array<Ticket> = [];

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit() {

    this.ticketService.getAllTickets().subscribe({
      next: (response) => {
         this.tickets = response
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

  getOwnerName(user: any): string | undefined {
    if (!user) {
      return
    }
    return user.firstname + " " + user.lastname
  }



}
