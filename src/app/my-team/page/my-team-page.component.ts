import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/shared/models/auth-user.interface';

@Component({
  selector: 'app-my-team-page',
  templateUrl: './my-team-page.component.html',
  styleUrls: ['./my-team-page.component.scss']
})
export class MyTeamPageComponent implements OnInit {

  userId$: Observable<string>;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userId$ = this.auth.user$.pipe(
      map((user: AuthUser) => user.sub.split('|')[1])
    );
  }

}