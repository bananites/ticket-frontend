import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Ticket } from '../models/ticket.class';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ticket-overview',
  standalone: true,
  imports: [RouterModule,MatCheckboxModule, MatButtonModule, MatListModule, MatTableModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './ticket-overview.component.html',
  styleUrl: './ticket-overview.component.scss'
})
export class TicketOverviewComponent {


displayedColumns: string[] = ['select','title','owner',  'status', 'updated', 'created',];

  // TODO make api call
  tickets: any 
   
}
