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
import { TicketNewListComponent } from '../pages/components/ticket-new-list/ticket-new-list.component';
import { StorageService } from '../services/storage/storage.service';
import { AuthUserService } from '../services/auth/auth-user.service';
import { coerceStringArray } from '@angular/cdk/coercion';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TicketOverviewComponent,
    CommonModule,
    DashboardComponent,
    MatTabsModule,
    RouterModule,
    MatInputModule,
    MatProgressSpinnerModule,
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
    TicketNewListComponent

  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {


  isLoggedIn = false;
  username?: string;

  // TODO make api call 
  tickets: Ticket[] = []
  ticketsNew: Ticket[] = []
  isLoading: boolean = true

  constructor(
    private _storageService: StorageService,
    private _authSerivce: AuthUserService,
    private ticketService: TicketService
  ) { }



  ngOnInit(): void {


    this.isLoggedIn = this._storageService.isLoggedOn();

    if (this.isLoggedIn) {
      const user = this._storageService.getSession();
      
    }

    this.ticketService.getAllTickets().subscribe({
      next: (response) => {
        response.forEach(ticket => {
          if (ticket.getStatus === 'new open') {
            this.ticketsNew.push(ticket)
            console.log(ticket.getTitle)
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
