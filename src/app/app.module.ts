import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './core/auth-interceptor.service';
import { CoreModule } from './core/core.module';
import { MyPlayersModule } from './my-players/my-players.module';
import { MyTeamModule } from './my-team/my-team.module';
import { SharedModule } from './shared/shared.module';
import { TrainingModule } from './training/training.module';
import { WhiteSkillsModule } from './white-skills/white-skills.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule,
    CoreModule,
    SharedModule,
    MyPlayersModule,
    MyTeamModule,
    WhiteSkillsModule,
    TrainingModule,
    AuthModule.forRoot({
      domain: 'hb-imhotapp.eu.auth0.com',
      clientId: 'SaxHAdQyAn1G6Otc1PNsbj6vS1kBMi7a',
      useRefreshTokens: true,
      cacheLocation: 'localstorage'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
