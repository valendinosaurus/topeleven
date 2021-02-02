import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from '../../models/auth-user.interface';

@Component({
  selector: 'app-shared-nav',
  templateUrl: './shared-nav.component.html',
  styleUrls: ['./shared-nav.component.scss']
})
export class SharedNavComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  user$: Observable<AuthUser>;

  menuToggled = false;
  isMobileMode = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loggedIn$ = this.auth.isAuthenticated$;

    this.user$ = this.auth.user$.pipe(
      map((user: AuthUser) => user)
    );

    this.isMobileMode = window.innerWidth <= 800;
  }

  login(e: Event): void {
    e.preventDefault();
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout();
  }

  toggleMenu(): void {
    this.menuToggled = !this.menuToggled;
  }

}
