import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketOverviewComponent } from './ticket-overview/ticket-overview.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'ticket-overview', component: TicketOverviewComponent},
            {path: 'ticket/:id', component: TicketViewComponent},
            {path: '',redirectTo:'/dashboard', pathMatch: 'full'}

        ],
    }];
