import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about/page/about-page.component';
import { CounterFormationPageComponent } from './counter-formations/page/counter-formation-page.component';
import { MyPlayersPageComponent } from './my-players/page/my-players-page.component';
import { MyTeamPageComponent } from './my-team/page/my-team-page.component';
import { LoginGuard } from './shared/guards/login.guard';
import { TrainingPageComponent } from './training/page/training-page.component';
import { WhiteSkillsListComponent } from './white-skills/components/white-skills-list/white-skills-list.component';

const routes: Routes = [
  {
    path: 'white-skills',
    component: WhiteSkillsListComponent
  },
  {
    path: 'my-players',
    canActivate: [LoginGuard],
    component: MyPlayersPageComponent
  },
  {
    path: 'my-team',
    canActivate: [LoginGuard],
    component: MyTeamPageComponent
  },
  {
    path: 'training',
    component: TrainingPageComponent
  },
  {
    path: 'counter-formations',
    component: CounterFormationPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
