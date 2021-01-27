import { Component, Input } from '@angular/core';
import { SkillValueObject } from '../../../shared/models/skill-value-object.interface';

@Component({
  selector: 'app-single-skill-field',
  templateUrl: './single-skill-field.component.html',
  styleUrls: ['./single-skill-field.component.scss']
})
export class SingleSkillFieldComponent {

  @Input() type: string;
  @Input() skill: SkillValueObject;
  @Input() editMode: boolean;

  getShortName(): string {
    return this.skill.name.substring(0, 4).toUpperCase();
  }

  getSkillClass(): { [key: string]: boolean } {
    return {
      'white-skill': this.skill.isWhiteSkill,
      'main-white-skill': this.skill.isMainPositionWhiteSkill
    };
  }

}
