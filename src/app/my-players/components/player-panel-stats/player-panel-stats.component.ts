import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.class';

@Component({
  selector: 'app-player-panel-stats',
  templateUrl: './player-panel-stats.component.html',
  styleUrls: ['./player-panel-stats.component.scss']
})
export class PlayerPanelStatsComponent {

  @Input() player: Player;

  topElevenValue: number;
  whiteSkillsValue: number;
  effectiveValue: number;

}
