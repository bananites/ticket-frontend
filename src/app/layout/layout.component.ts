import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket/ticket.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TicketOverviewComponent } from '../pages/ticket-overview/ticket-overview.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TicketOverviewComponent, CommonModule, DashboardComponent, MatTabsModule, RouterModule,
    MatInputModule, MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {


  // TODO make api call 
  tickets: Ticket[] = []
  ticketsNew: Ticket[] = []
  isLoading: boolean = true

  constructor(
    private ticketService: TicketService
  ) {

  }

  ngOnInit(): void {

    this.ticketService.getAllTickets().subscribe({
      next: (response) => {
        response.forEach(ticket => {
          if (ticket.getStatus === 'new open') {
            this.ticketsNew.push(ticket)
            console.log(ticket)
          }
        });
        this.isLoading = false

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
