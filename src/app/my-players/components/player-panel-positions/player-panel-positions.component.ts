import { Component, Input, OnChanges } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from '../../../shared/models/position.interface';

@Component({
  selector: 'app-player-panel-positions',
  templateUrl: './player-panel-positions.component.html',
  styleUrls: ['./player-panel-positions.component.scss']
})
export class PlayerPanelPositionsComponent implements OnChanges {

  @Input() player: Player;
  @Input() allPositions: Position[];
  @Input() editMode: boolean;

  allowedPositions: Position[];

  positionsChecked: {id: number; checked: boolean}[];

  selectedPositionIds: number[];

  formReady = false;

  constructor(
    private positionService: PositionService
  ) {}

  ngOnChanges(): void {
    if (this.player && this.allPositions) {
      this.positionsChecked = this.allPositions.map(p => ({
        id: p.id,
        checked: false
      }));

      this.player.positions.forEach(p => {
        this.positionsChecked[p - 1].checked = true;
      });

      this.formReady = true;
      this.getAllAllowedPositions();
    }
  }

  checkPosition([
    positionsChecked,
    positionId,
    checked
  ]: [
    {id: number; checked: boolean}[],
    number,
    boolean
  ]): void {
    this.positionsChecked = positionsChecked;

    if (positionId === 1) {
      this.player.mainPosition = checked ? 1 : undefined;
    } else {
      this.player.mainPosition = this.positionsChecked.filter(p => p.checked)[0].id;
    }

    this.getAllAllowedPositions();
    this.player.positions = this.positionsChecked.filter(p => p.checked).map(p => p.id);
  }

  getAllAllowedPositions(): void {
    const checkedPositions = this.positionsChecked.filter(p => p.checked).map(p => p.id);
    this.allowedPositions =  this.allPositions.slice(1).filter(p => checkedPositions.includes(p.id));
  }

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
