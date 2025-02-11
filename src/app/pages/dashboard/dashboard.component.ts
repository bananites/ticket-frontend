import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



}