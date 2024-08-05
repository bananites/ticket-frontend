import { Component } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket/ticket.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.scss'
})
export class TicketCreateComponent {


  constructor(
    private ticketService: TicketService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }


  form = this._formBuilder.group({
    userCtrl: ['', Validators.required],
    titleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required]

  });

  isLinear = false;

  onSubmit(): void {

    if (this.form.invalid) {
      console.warn("INVALID")
      return;
    }

     const ticket: Ticket = new Ticket();

    // // TODO add user when login is implemented

    ticket.setCreatedBy = this.form.value.userCtrl!
    ticket.setTitle = this.form.value.titleCtrl!
    ticket.setDescription = this.form.value.descriptionCtrl!

    this.ticketService.postTicket(ticket).subscribe({
      next: (ticket) => {
        this.openSnackBar('Thanks Ticket has been created', 'Ok')
      },
      error: (err) => {
        this.openSnackBar('Creating a ticket failed, please try again later', 'Ok')
      }
    })
  }
  openSnackBar(message: string, action: string){
    this._snackBar.open(message, action);
  }



}
