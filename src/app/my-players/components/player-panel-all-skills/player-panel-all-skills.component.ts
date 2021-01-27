import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.class';

@Component({
  selector: 'app-player-panel-all-skills',
  templateUrl: './player-panel-all-skills.component.html',
  styleUrls: ['./player-panel-all-skills.component.scss']
})
export class PlayerPanelAllSkillsComponent {

  @Input() player: Player;
  @Input() editMode: boolean;

}
