import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";

export interface Tickets{
  title: string;
  updated: string;
  created:string;
  status: string;

}
@Component({
  selector: 'app-ticket-overview',
  standalone: true,
  imports: [MatCheckboxModule, MatButtonModule, MatListModule, MatTableModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './ticket-overview.component.html',
  styleUrl: './ticket-overview.component.scss'
})
export class TicketOverviewComponent {


displayedColumns: string[] = ['select','title', 'updated', 'created', 'status'];

  // TODO make api call
 tickets: Tickets[] = [
  {
    title: 'Photos',
    updated: new Date('2024-05-26').toLocaleDateString(),
    created: new Date('12/31/15').toLocaleDateString(), // Beispiel für das Erstellungsdatum
    status: 'completed' // Beispiel für den Status
  },
  {
    title: 'Recipes',
    updated: new Date('1/17/16').toLocaleDateString(),
    created: new Date('1/10/16').toLocaleDateString(), // Beispiel für das Erstellungsdatum
    status: 'in-progress' // Beispiel für den Status
  },
  {
    title: 'Work',
    updated: new Date('1/28/16').toLocaleDateString(),
    created: new Date('1/1/16').toLocaleDateString(), // Beispiel für das Erstellungsdatum
    status: 'pending' // Beispiel für den Status
  },
];
}
