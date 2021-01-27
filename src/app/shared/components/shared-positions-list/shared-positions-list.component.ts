import { Component, Input } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { Position } from 'src/app/shared/models/position.interface';

@Component({
  selector: 'app-shared-positions-list',
  templateUrl: './shared-positions-list.component.html',
  styleUrls: ['./shared-positions-list.component.scss']
})
export class SharedPositionsListComponent {

  @Input() positions: Position[];

  constructor(
    private positionService: PositionService
  ) {}

  getPositionLabelClass(positionId: number): { [key: string]: boolean} {
    return {
      'gk-panel': this.positionService.isGoalkeeperByPositionId(positionId),
      'd-panel': this.positionService.isDefenceByPositionId(positionId),
      'm-panel': this.positionService.isMidfieldByPositionId(positionId),
      's-panel': this.positionService.isAttackByPositionId(positionId)
    };
  }

}
