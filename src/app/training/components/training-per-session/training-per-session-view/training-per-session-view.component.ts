/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { TrainingSessionSkillObject } from '../../../models/training-session-skill-object.interface';

@Component({
  selector: 'app-training-per-session-view',
  templateUrl: './training-per-session-view.component.html',
  styleUrls: ['./training-per-session-view.component.scss']
})
export class TrainingPerSessionViewComponent {

  @Input() combinedObject: TrainingSessionSkillObject;
  @Input() selectedPositions: {id: number; checked: boolean}[];

  getHeaderClass(): {[key: string]: boolean} {
    return {
      'training-per-session-view__header--attack': this.isAttackSession(),
      'training-per-session-view__header--defense': this.isDefenseSession(),
      'training-per-session-view__header--fitnesse-mental': this.isFitnesseMentalSession()
    };
  }

  isAttackSession(): boolean {
    const attackIds = [1, 2, 3, 4, 5, 6, 7, 8];
    return attackIds.includes(+this.combinedObject.session.id);
  }

  isDefenseSession(): boolean {
    const defenseIds = [9, 10, 11, 12, 13, 14, 15, 16];
    return defenseIds.includes(+this.combinedObject.session.id);
  }

  isFitnesseMentalSession(): boolean {
    const isFitnesseMentalIds = [17, 18, 19, 20, 21, 22, 23, 24];
    return isFitnesseMentalIds.includes(+this.combinedObject.session.id);
  }

}
