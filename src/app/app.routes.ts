import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketUnassingedComponent } from './pages/ticket-unassinged/ticket-unassinged.component';
import { TicketCreateComponent } from './modules/ticketsystem/ticket-create/ticket-create.component';
import { TicketOverviewComponent } from './modules/ticketsystem/ticket-overview/ticket-overview.component';
import { TicketViewComponent } from './modules/ticketsystem/ticket-view/ticket-view.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ticket-overview', component: TicketOverviewComponent },
      { path: 'ticket-unassigned', component: TicketUnassingedComponent },
      { path: 'ticket/:id', component: TicketViewComponent },
      { path: 'ticket-create', component: TicketCreateComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];
