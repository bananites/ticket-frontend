import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket/ticket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { map, Observable, startWith } from 'rxjs';


@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe
  ],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.scss'
})
export class TicketCreateComponent implements OnInit {

  
  userCtrl = new FormControl('');

  constructor(
    private ticketService: TicketService,
    private userService: UserService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {

    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(''),
      map(user => (user ? this._filterUser(user): this.users.slice()))
    )
  }
  ngOnInit(): void {

    this.userService.getAllUser().subscribe({
      next: (response) => {
        this.users = response
      },
      error: (err) => {
        console.log(err)
      }
    });

  }


  form = this._formBuilder.group({
    userCtrlName: ['', Validators.required],
    titleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required]

  });


  users: User[] = [];
  filteredUsers: Observable<User[]>;



  private _filterUser(value: string): User[] {
     const filterValue = value.toLowerCase();

     return this.users.filter( 
      user => user.firstname.toLowerCase().includes(filterValue) || user.lastname.toLowerCase().includes(filterValue));

  }

  onSubmit(): void {

    if (this.form.invalid) {
      console.warn("INVALID")
      return;
    }

    const ticket: Ticket = new Ticket();

    // // TODO add user when login is implemented

    ticket.setCreatedBy = this.form.value.userCtrlName!
    ticket.setTitle = this.form.value.titleCtrl!
    ticket.setDescription = this.form.value.descriptionCtrl!

    this.ticketService.postTicket(ticket).subscribe({
      next: (response) => {
        this.openSnackBar('Thanks Ticket has been created', 'Ok')
        this.router.navigate(['ticket/' + response.getId])

      },
      error: (err) => {
        this.openSnackBar('Creating a ticket failed, please try again later', 'Ok')
      }
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }



}
