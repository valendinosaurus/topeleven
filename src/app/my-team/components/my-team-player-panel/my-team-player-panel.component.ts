import { Component, Input } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from 'src/app/shared/models/position.interface';

@Component({
  selector: 'app-my-team-player-panel',
  templateUrl: './my-team-player-panel.component.html',
  styleUrls: ['./my-team-player-panel.component.scss']
})
export class MyTeamPlayerPanelComponent {

  @Input() player: Player;
  @Input() allPositions: Position[];

  constructor(
    private positionService: PositionService
  ) {}

  getPlayerPositions(): Position[] {
    return this.allPositions.filter(p =>
      this.player.positions.includes(p.id)
    );
  }

  getMainPositionName(): string {
    if (this.allPositions) {
      return this.allPositions.find(p => p.id === this.player.mainPosition).name;
    }

    return '';
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
