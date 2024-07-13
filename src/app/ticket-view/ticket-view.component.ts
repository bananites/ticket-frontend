import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ticket } from '../models/ticket.class';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-ticket-view',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './ticket-view.component.html',
  styleUrl: './ticket-view.component.scss'
})
export class TicketViewComponent implements OnInit {



  // TODO implement TicketService
  // TODO make api call and get informations

  

  constructor(
    private ticket: Ticket,
    private route: ActivatedRoute,
    // private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      const id = params.get('id');

      if(id){
        this.loadTicket(id)
      }
    });
  }

  loadTicket(id: string): void {
    // this.ticketService.getTicketById(id).subscribe(ticket => {this.ticket = ticket;});
    // this.ticket = this.tickets.find(ticket => ticket.id === id);

  }



}
