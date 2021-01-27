import { Component, Input } from '@angular/core';
import { SkillValueObject } from '../../../shared/models/skill-value-object.interface';

@Component({
  selector: 'app-player-panel-skill-group',
  templateUrl: './player-panel-skill-group.component.html',
  styleUrls: ['./player-panel-skill-group.component.scss']
})
export class PlayerPanelSkillGroupComponent {

  @Input() skills: SkillValueObject[];
  @Input() editMode: boolean;

}
