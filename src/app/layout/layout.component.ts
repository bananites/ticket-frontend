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
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ticket } from '../modules/ticketsystem/models/ticket';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TicketNewListComponent } from '../modules/ticketsystem/components/ticket-new-list/ticket-new-list.component';
import { TicketService } from '../modules/ticketsystem/services/ticket/ticket.service';
import { StorageService } from '../_services/storage/storage.service';
import { AuthUserService } from '../_services/auth/auth-user.service';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
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
