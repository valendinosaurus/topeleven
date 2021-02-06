import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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
    if (environment.production) {
      this.loggedIn$ = this.auth.isAuthenticated$;

      this.user$ = this.auth.user$.pipe(
        map((user: AuthUser) => user)
      );
    } else {
      this.loggedIn$ = of(true);

      this.user$ = of(({
        email: 'homebudget@protonmail.com',
        email_verified: false,
        name: 'homebudget@protonmail.com',
        nickname: 'homebudget',
        picture: 'https://s.gravatar.com/avatar/4f970e03c5a40136aa6ccfde398deb9d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fho.png',
        updated_at: new Date(),
        sub: 'auth0|5e6e6050e965e80c8b4c382c'
      }));
    }

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
