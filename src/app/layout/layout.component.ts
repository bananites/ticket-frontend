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
import { TicketOverviewComponent } from '../ticket-overview/ticket-overview.component';
import { RouterModule } from '@angular/router';
import { Ticket } from '../models/ticket.interface';

const config = {
  disableAnimations: false
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TicketOverviewComponent, CommonModule, DashboardComponent, MatTabsModule, RouterModule,
    MatInputModule,
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
export class LayoutComponent{


  // TODO make api call 
  tickets: Ticket[] = [
    {
      id: '1',
      title: 'Photos',
      description: 'lorem ipsum ksaojfw  aiwfoai oinfoifn aonacnoiaooi oij aop cjooi oai o c',
      updated: new Date('2024-05-26').toLocaleDateString(),
      created: new Date('12/31/15').toLocaleDateString(), // Beispiel für das Erstellungsdatum
      owner: 'Pascal Breuer',
      status: 'completed' ,// Beispiel für den Status

    
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
