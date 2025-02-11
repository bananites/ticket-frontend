import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import {  RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket/ticket.service';

@Component({
  selector: 'app-ticket-unassinged',
  standalone: true,
  imports: [RouterModule, MatCheckboxModule, MatTableModule, MatButtonModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './ticket-unassinged.component.html',
  styleUrl: './ticket-unassinged.component.scss'
})
export class TicketUnassingedComponent implements OnInit {


  displayedColumns: string[] = ['select', 'title', 'status', 'updated', 'created',];

  // TODO make api call remember to check just for empty owner
  tickets: Ticket[] = []
  isLoading: boolean = true

  constructor(
    private ticketService: TicketService,

  ) { }

  async ngOnInit() {

    await this.ticketService.getAllTickets().subscribe({
      next: (response) => {

        response.forEach(ticket => {
          if (ticket.getOwner == undefined) {
            this.tickets.push(ticket)
          }
        });
        this.isLoading = false
      },
      error: (err) => {
        console.log("ticket-unassigned")
        console.log(err)
      }
    })

  }





}
