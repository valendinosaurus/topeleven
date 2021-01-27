import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private auth: AuthService
  ) { }

  canActivate(): Observable<boolean> {

    if (!environment.production) {
      return of(true);
    }

    return this.auth.isAuthenticated$;
  }
}
