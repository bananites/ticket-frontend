import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StorageService } from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit{

  isLoggedIn = false;

  constructor(
    private storageService: StorageService,
    private _router: Router,
  ){}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedOn();

    if(this.isLoggedIn){
      this._router.navigate(['']);
    }

    this._router.navigate(["login"]);
    
  }
  title = 'ticket-frontend';
}
