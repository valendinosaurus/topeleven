/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.interface';

@Component({
  selector: 'app-training-per-session-trained-skills-view',
  templateUrl: './training-per-session-trained-skills-view.component.html',
  styleUrls: ['./training-per-session-trained-skills-view.component.scss']
})
export class TrainingPerSessionTrainedSkillsViewComponent {

  @Input() skills: Skill[];
  @Input() selectedSkills: {id: number; checked: boolean}[];

  getShortName(name: string): string {
    return name.substr(0, 4).toLocaleUpperCase();
  }

  getSkillClass(id: number): {[key: string]: boolean} {
    return {
      'training-per-session-trained-skills-view__trained-skill--selected': this.isSkillSelected(id)
    };
  }

  isSkillSelected(id: number): boolean {
    if (this.selectedSkills) {
      return this.selectedSkills.filter(s => s.checked).map(s => s.id).includes(id);
    }

    return false;
  }

}
