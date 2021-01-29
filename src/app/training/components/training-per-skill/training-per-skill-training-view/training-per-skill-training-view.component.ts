/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/shared/models/skill.interface';
import { TrainingSession } from 'src/app/shared/models/training-session.interface';

@Component({
  selector: 'app-training-per-skill-training-view',
  templateUrl: './training-per-skill-training-view.component.html',
  styleUrls: ['./training-per-skill-training-view.component.scss']
})
export class TrainingPerSkillTrainingViewComponent {

  @Input() combinedObject: {t: TrainingSession; s: Skill[]};
  @Input() selectedSkills: {id: number; checked: boolean}[];

  getHeaderClass(): {[key: string]: boolean} {
    return {
      'training-per-skill-training-view__header--attack': this.isAttackSession(),
      'training-per-skill-training-view__header--defense': this.isDefenseSession(),
      'training-per-skill-training-view__header--fitnesse-mental': this.isFitnesseMentalSession()
    };
  }

  isAttackSession(): boolean {
    const attackIds = [1, 2, 3, 4, 5, 6, 7, 8];
    return attackIds.includes(+this.combinedObject.t.id);
  }

  isDefenseSession(): boolean {
    const defenseIds = [9, 10, 11, 12, 13, 14, 15, 16];
    return defenseIds.includes(+this.combinedObject.t.id);
  }

  isFitnesseMentalSession(): boolean {
    const isFitnesseMentalIds = [17, 18, 19, 20, 21, 22, 23, 24];
    return isFitnesseMentalIds.includes(+this.combinedObject.t.id);
  }

}
