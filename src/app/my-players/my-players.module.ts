import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyPlayersComponent } from './components/my-players/my-players.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { PlayerPanelAllSkillsComponent } from './components/player-panel-all-skills/player-panel-all-skills.component';
import { PlayerPanelButtonsComponent } from './components/player-panel-buttons/player-panel-buttons.component';
import { PlayerPanelHeaderComponent } from './components/player-panel-header/player-panel-header.component';
import { PlayerPanelPositionsComponent } from './components/player-panel-positions/player-panel-positions.component';
import { PlayerPanelSkillGroupComponent } from './components/player-panel-skill-group/player-panel-skill-group.component';
import { PlayerPanelStatsComponent } from './components/player-panel-stats/player-panel-stats.component';
import { PlayerPanelComponent } from './components/player-panel/player-panel.component';
import { SingleSkillFieldComponent } from './components/single-skill-field/single-skill-field.component';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { MyPlayersPageComponent } from './page/my-players-page.component';

@NgModule({
  declarations: [
    SingleSkillFieldComponent,
    MyPlayersComponent,
    PlayerPanelComponent,
    PlayerPanelHeaderComponent,
    PlayerPanelStatsComponent,
    TeamStatsComponent,
    PlayerPanelSkillGroupComponent,
    PlayerPanelPositionsComponent,
    NewPlayerComponent,
    PlayerPanelButtonsComponent,
    PlayerPanelAllSkillsComponent,
    MyPlayersPageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SingleSkillFieldComponent,
    MyPlayersPageComponent
  ]
})
export class MyPlayersModule { }
