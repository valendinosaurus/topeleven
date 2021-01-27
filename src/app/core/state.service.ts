import { Injectable } from '@angular/core';
import { AuthUser } from '@shared/models/auth-user.interface';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly user$ = new ReplaySubject<AuthUser>();

  updateUser(user: AuthUser): void {
    this.user$.next(user);
  }

  getUser$(): Observable<AuthUser> {
    return this.user$.asObservable();
  }

}
