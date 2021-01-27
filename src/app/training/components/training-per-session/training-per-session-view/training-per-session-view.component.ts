/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { TrainingSessionSkillObject } from '../../../models/training-session-skill-object.interface';

@Component({
  selector: 'app-training-per-session-view',
  templateUrl: './training-per-session-view.component.html',
  styleUrls: ['./training-per-session-view.component.scss']
})
export class TrainingPerSessionViewComponent {

  @Input() combinedObject: TrainingSessionSkillObject;
  @Input() selectedPositions: {id: number; checked: boolean}[];

  constructor(
    private positionService: PositionService
  ){}

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

  getPositionLabelClass(positionId: number): { [key: string]: boolean} {
    return {
      'gk-panel': this.positionService.isGoalkeeperByPositionId(positionId),
      'd-panel': this.positionService.isDefenceByPositionId(positionId),
      'm-panel': this.positionService.isMidfieldByPositionId(positionId),
      's-panel': this.positionService.isAttackByPositionId(positionId)
    };
  }

  getShortName(name: string): string {
    return name.substr(0, 4).toLocaleUpperCase();
  }

  shouldDisplayPosition(id: number): boolean {
    return this.selectedPositions && this.selectedPositions.find(p => p.id === id).checked;
  }

  getEfficiencyClass(efficiency: number): {[key: string]: boolean} {
    return {
      'training-per-session-view__column-efficiency--top': efficiency >= 0.8,
      'training-per-session-view__column-efficiency--good': efficiency < 0.8 && efficiency >= 0.6,
      'training-per-session-view__column-efficiency--medium': efficiency < 0.6 && efficiency >= 0.3,
      'training-per-session-view__column-efficiency--bad': efficiency < 0.3
    };
  }

}
