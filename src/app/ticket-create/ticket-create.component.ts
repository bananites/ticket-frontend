import { Component } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from '../models/ticket';

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

  form = this._formBuilder.group({
    firstnameCtrl: ['', Validators.required],
    lastnameCtrl: ['', Validators.required],
    emailCtrl: ['', Validators.required],
    titleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required]

  });

  isLinear = false;

  onSubmit(): void{

    if(this.form.invalid){
      console.warn("INVALID")
      return;
    }

    const ticket: Ticket = new Ticket();

    ticket.title = this.form.value.titleCtrl!
    ticket.description = this.form.value.descriptionCtrl!

}


  constructor(private _formBuilder: FormBuilder) { }

}
