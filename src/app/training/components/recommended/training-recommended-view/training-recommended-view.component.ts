/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { DrillSequence } from 'src/app/training/models/drill-sequence.interface';

@Component({
  selector: 'app-training-recommended-view',
  templateUrl: './training-recommended-view.component.html',
  styleUrls: ['./training-recommended-view.component.scss']
})
export class TrainingRecommendedViewComponent {

  @Input() drillSequence: DrillSequence;

  constructor(
    private positionService: PositionService
  ){}

  getHeaderClass(): {[key: string]: boolean} {
    return {
      'training-recommended-view__header--gk': this.isGoalkeeper(),
      'training-recommended-view__header--defender': this.isDefender(),
      'training-recommended-view__header--midfielder': this.isMidfielder(),
      'training-recommended-view__header--attacker': this.isAttacker()
    };
  }

  getPositionLabelClass(positionId: number): { [key: string]: boolean} {
    return {
      'gk-panel': this.positionService.isGoalkeeperByPositionId(positionId),
      'd-panel': this.positionService.isDefenceByPositionId(positionId),
      'm-panel': this.positionService.isMidfieldByPositionId(positionId),
      's-panel': this.positionService.isAttackByPositionId(positionId)
    };
  }

  isGoalkeeper(): boolean {
    return false;
  }

  isDefender(): boolean {
    return false;
  }

  isMidfielder(): boolean {
    return false;
  }

  isAttacker(): boolean {
    return false;
  }
}
