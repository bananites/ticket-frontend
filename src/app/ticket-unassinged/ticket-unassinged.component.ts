import { Component } from '@angular/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ticket-unassinged',
  standalone: true,
  imports: [RouterModule, MatCheckboxModule, MatTableModule, MatButtonModule],
  templateUrl: './ticket-unassinged.component.html',
  styleUrl: './ticket-unassinged.component.scss'
})
export class TicketUnassingedComponent {

  displayedColumns: string[] = ['select', 'title', 'status', 'updated', 'created',];

  // TODO make api call remember to check just for empty owner

  tickets: any
}
