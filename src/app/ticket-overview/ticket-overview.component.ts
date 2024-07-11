import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { Ticket } from '../models/ticket.interface';
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
  tickets: Ticket[] = [
    {
      id: '1',
      title: 'Photos',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('2024-05-26').toLocaleDateString(),
      created: new Date('12/31/15').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      owner: 'Pascal Breuer',
      status: 'completed', // Beispiel für den Status

     
    },
    {
      id: '2',
      title: 'Recipes',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('1/17/16').toLocaleDateString(),
      created: new Date('1/10/16').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      owner: 'Pascal Breuer',
      status: 'in-progress', // Beispiel für den Status

    },
    {
      id: '3',
      title: 'Work',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('1/28/16').toLocaleDateString(),
      created: new Date('1/1/16').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      owner: 'Pascal Breuer',
      status: 'pending', // Beispiel für den Status
    },
];
}
