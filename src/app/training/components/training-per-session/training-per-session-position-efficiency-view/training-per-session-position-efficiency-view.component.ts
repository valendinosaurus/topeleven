/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { PositionEffectiveness } from 'src/app/training/models/training-session-skill-object.interface';

@Component({
  selector: 'app-training-per-session-position-efficiency-view',
  templateUrl: './training-per-session-position-efficiency-view.component.html',
  styleUrls: ['./training-per-session-position-efficiency-view.component.scss']
})
export class TrainingPerSessionPositionEfficiencyViewComponent {

  @Input() efficiencyPerPosition: PositionEffectiveness[];
  @Input() selectedPositions: {id: number; checked: boolean}[];

  constructor(
    private positionService: PositionService
  ){}

  getShortName(name: string): string {
    return name.substr(0, 4).toLocaleUpperCase();
  }

  shouldDisplayPosition(id: number): boolean {
    return this.selectedPositions && this.selectedPositions.find(p => p.id === id).checked;
  }

  getPositionLabelClass(positionId: number): { [key: string]: boolean} {
    return {
      'gk-panel': this.positionService.isGoalkeeperByPositionId(positionId),
      'd-panel': this.positionService.isDefenceByPositionId(positionId),
      'm-panel': this.positionService.isMidfieldByPositionId(positionId),
      's-panel': this.positionService.isAttackByPositionId(positionId)
    };
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
