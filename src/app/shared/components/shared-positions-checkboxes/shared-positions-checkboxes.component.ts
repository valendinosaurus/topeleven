import { Component, Input, OnInit } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { Position } from 'src/app/shared/models/position.interface';
import { Player } from '../../models/player.class';

@Component({
  selector: 'app-shared-positions-checkboxes',
  templateUrl: './shared-positions-checkboxes.component.html',
  styleUrls: ['./shared-positions-checkboxes.component.scss']
})
export class SharedPositionsCheckboxesComponent implements OnInit {

  @Input() player: Player;
  @Input() allPositions: Position[];
  @Input() displayLabel: boolean;

  positionsChecked: {id: number; checked: boolean}[];

  constructor(
    private positionService: PositionService
  ) {
  }

  ngOnInit(): void {
    this.positionsChecked = this.allPositions.map(p => ({
      id: p.id,
      checked: false
    }));

    if (this.player) {
      this.player.positions.forEach(p => {
        this.positionsChecked[p - 1].checked = true;
      });
    }
  }

  checkPosition(positionId: number, checked: boolean): void {
    if (positionId === 1) {
      this.positionsChecked = this.positionsChecked.map(p => ({
        ...p,
        checked: false
      }));
      this.positionsChecked[0].checked = checked;
    } else {
      this.positionsChecked[0].checked = false;
    }

    this.player.positions = this.positionsChecked.filter(p => p.checked).map(p => p.id);
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
