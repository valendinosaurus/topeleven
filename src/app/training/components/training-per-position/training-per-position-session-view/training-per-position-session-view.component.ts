/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { TrainingEffectiveness } from 'src/app/training/models/position-training-object.interface';

@Component({
  selector: 'app-training-per-position-session-view',
  templateUrl: './training-per-position-session-view.component.html',
  styleUrls: ['./training-per-position-session-view.component.scss']
})
export class TrainingPerPositionSessionViewComponent {

  @Input() trainingSession: TrainingEffectiveness;

  getPanelClass(): {[key: string]: boolean} {
    return {
      'training-per-position-session-view--attack': this.isAttackSession(),
      'training-per-position-session-view--defense': this.isDefenseSession(),
      'training-per-position-session-view--fitnesse-mental': this.isFitnesseMentalSession()
    };
  }

  isAttackSession(): boolean {
    const attackIds = [1, 2, 3, 4, 5, 6, 7, 8];
    return attackIds.includes(+this.trainingSession.id);
  }

  isDefenseSession(): boolean {
    const defenseIds = [9, 10, 11, 12, 13, 14, 15, 16];
    return defenseIds.includes(+this.trainingSession.id);
  }

  isFitnesseMentalSession(): boolean {
    const isFitnesseMentalIds = [17, 18, 19, 20, 21, 22, 23, 24];
    return isFitnesseMentalIds.includes(+this.trainingSession.id);
  }

  getShortName(name: string): string {
    return name.substr(0, 4).toLocaleUpperCase();
  }

  getEfficiencyClass(efficiency: number): {[key: string]: boolean} {
    return {
      'training-per-position-session-view__column-efficiency--top': efficiency >= 50,
      'training-per-position-session-view__column-efficiency--good': efficiency < 50 && efficiency >= 35,
      'training-per-position-session-view__column-efficiency--medium': efficiency < 35 && efficiency >= 15,
      'training-per-position-session-view__column-efficiency--bad': efficiency < 15
    };
  }

  getOthersClass(numberOfOtherSkills: number): {[key: string]: boolean} {
    return {
      'training-per-position-session-view__column-others--top': numberOfOtherSkills === 0,
      'training-per-position-session-view__column-others--bad': numberOfOtherSkills > 3
    };
  }

}
