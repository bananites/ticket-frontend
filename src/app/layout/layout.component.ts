import { Component } from '@angular/core';
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

const config = {
  disableAnimations: false
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, DashboardComponent, MatTabsModule,
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
export class LayoutComponent {

  currentPage: string = 'dashboard';

  // TODO make api call 
  ticketsViewed: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
