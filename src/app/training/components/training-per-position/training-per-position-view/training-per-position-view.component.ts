/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { PositionTrainingObject } from '../../../models/position-training-object.interface';

@Component({
  selector: 'app-training-per-position-view',
  templateUrl: './training-per-position-view.component.html',
  styleUrls: ['./training-per-position-view.component.scss']
})
export class TrainingPerPositionViewComponent implements OnInit {

  @Input() positionTrainingObject: PositionTrainingObject;

  constructor(
    private positionService: PositionService
  ){}

  ngOnInit(): void {
  }

  getHeaderClass(): {[key: string]: boolean} {
    return {
      'training-per-session-view__header--gk': this.isGoalkeeper(),
      'training-per-session-view__header--defender': this.isDefender(),
      'training-per-session-view__header--midfielder': this.isMidfielder(),
      'training-per-session-view__header--attacker': this.isAttacker()
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
