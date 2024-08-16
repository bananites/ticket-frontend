import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketUnassingedComponent } from './pages/ticket-unassinged/ticket-unassinged.component';
import { TicketCreateComponent } from './pages/ticket-create/ticket-create.component';
import { TicketOverviewComponent } from './pages/ticket-overview/ticket-overview.component';
import { TicketViewComponent } from './pages/ticket-view/ticket-view.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'ticket-overview', component: TicketOverviewComponent},
            {path: 'ticket-unassigned', component: TicketUnassingedComponent},
            {path: 'ticket/:id', component: TicketViewComponent},
            {path: 'ticket-create', component: TicketCreateComponent},
            {path: '',redirectTo:'/dashboard', pathMatch: 'full'}

        ],
    }];
