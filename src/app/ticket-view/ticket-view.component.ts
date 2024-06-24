import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tickets } from '../models/ticket.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
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


  tickets: Tickets[] = [
    {
      id: '1',
      title: 'Photos',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('2024-05-26').toLocaleDateString(),
      created: new Date('12/31/15').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      status: 'completed' // Beispiel für den Status
    },
    {
      id: '2',
      title: 'Recipes',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('1/17/16').toLocaleDateString(),
      created: new Date('1/10/16').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      status: 'in-progress' // Beispiel für den Status
    },
    {
      id: '3',
      title: 'Work',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('1/28/16').toLocaleDateString(),
      created: new Date('1/1/16').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      status: 'pending' // Beispiel für den Status
    },
  ];

  ticket: any;

  // TODO implement TicketService

  constructor(
    private route: ActivatedRoute,
    // private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadTicket(id);
    }
  }

  loadTicket(id: string): void {
    // this.ticketService.getTicketById(id).subscribe(ticket => {this.ticket = ticket;});
    this.ticket = this.tickets.find(ticket => ticket.id === id);

  }



}
