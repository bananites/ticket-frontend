import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Ticket } from '../../../models/ticket';
import { RouterModule } from '@angular/router';
import { TicketService } from '../../../services/ticket/ticket.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ticket-new-list',
  standalone: true,
  imports: [
    MatListModule,
    RouterModule,
    CommonModule


  ],
  templateUrl: './ticket-new-list.component.html',
  styleUrl: './ticket-new-list.component.scss'
})
export class TicketNewListComponent implements OnInit {

  tickets: any[] = []
  isLoading: boolean = true

  constructor(
    private ticketService: TicketService,

  ) { }

  ngOnInit(): void {

    this.ticketService.getAllTickets().subscribe({
      next: (response) => {
        response.forEach((element) =>{
          this.tickets.push(new Ticket(element))
        }
        ) 
        this.isLoading = false
      }

    });

  }
  
}
