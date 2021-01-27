import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.interface';

@Component({
  selector: 'app-training-per-session-trained-skills-view',
  templateUrl: './training-per-session-trained-skills-view.component.html',
  styleUrls: ['./training-per-session-trained-skills-view.component.scss']
})
export class TrainingPerSessionTrainedSkillsViewComponent {

  @Input() skills: Skill[];

  getShortName(name: string): string {
    return name.substr(0, 4).toLocaleUpperCase();
  }

}
