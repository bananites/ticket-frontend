import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StorageService } from './services/storage/storage.service';
import { EventBusService } from './shared/event-bus/event-bus.service';
import { AuthUserService } from './services/auth/auth-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  eventBusSub?: Subscription

  constructor(
    private storageService: StorageService,
    private _router: Router,
    private _eventBusService: EventBusService,
    private _authSerice: AuthUserService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedOn();

    if (this.isLoggedIn) {
      this._router.navigate(['']);
    } else {

      this._router.navigate(["login"]);
    }


    this.eventBusSub = this._eventBusService.on('logout', () => {
      this.logout();
    })

  }
  title = 'ticket-frontend';

  logout() {
    // TODO logout auth service
    this._authSerice.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();

      },
      error: err => {
        console.log(err);
      }
    });
  }
}
