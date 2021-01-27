/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Component, Input } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { Position } from 'src/app/shared/models/position.interface';
import { Player } from '../../models/player.class';

@Component({
  selector: 'app-shared-positions-dropdown',
  templateUrl: './shared-positions-dropdown.component.html',
  styleUrls: ['./shared-positions-dropdown.component.scss']
})
export class SharedPositionsDropdownComponent {

  @Input() player: Player;
  @Input() allPositions: Position[];

  constructor(
    private positionService: PositionService
  ) { }

  getMainPositionName(): string {
    return this.allPositions.find(p => p.id === this.player.mainPosition).name;
  }

  getAllowedPositions(): Position[] {
    return this.allPositions.filter(p => this.player.positions.includes(p.id));
  }

  getPositionLabelClass(positionId: number): { [key: string]: boolean} {
    return {
      'gk-panel': this.positionService.isGoalkeeperByPositionId(positionId),
      'd-panel': this.positionService.isDefenceByPositionId(positionId),
      'm-panel': this.positionService.isMidfieldByPositionId(positionId),
      's-panel': this.positionService.isAttackByPositionId(positionId)
    };
  }

}
