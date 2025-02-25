import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthUserService } from '../../_services/auth/auth-user.service';
import { StorageService } from '../../_services/storage/storage.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthUserService,
    private _router: Router,
    private _storageService: StorageService,
  ) { }

  form = this._formBuilder.group({
    emailCtrl: ['', Validators.required],
    passwordCtrl: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      console.warn('INVALID');
      return;
    }

    const email = this.form.value.emailCtrl!;
    const pass = this.form.value.passwordCtrl!;

    
    // build auth login auth service
    this._authService.authUser(email, pass).subscribe({
      next: (value) => {
        this._storageService.saveSession(value);
        this._router.navigate(['']);
        // TODO add roles
      },

      error: (err) => {
        // TODO add snackbar
        console.warn('Login not correct!' + err);
        console.log(err);
      },
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
