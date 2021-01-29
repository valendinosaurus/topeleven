import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PositionService } from 'src/app/core/position.service';
import { Position } from '../../models/position.interface';

@Component({
  selector: 'app-shared-simple-position-checkboxes',
  templateUrl: './shared-simple-position-checkboxes.component.html',
  styleUrls: ['./shared-simple-position-checkboxes.component.scss']
})
export class SharedSimplePositionCheckboxesComponent implements OnInit {

  @Input() allPositions: Position[];

  positionsChecked: {id: number; checked: boolean}[] = [];

  @Output() positionsSelected = new EventEmitter<{id: number; checked: boolean}[]>();

  constructor(
    private positionService: PositionService
  ) {
  }

  ngOnInit(): void {
    this.positionsChecked = this.allPositions.map(p => ({
      id: p.id,
      checked: true
    }));
  }

  checkPosition(positionId: number, checked: boolean): void {
    this.positionsChecked[positionId - 1].checked = checked;

    this.positionsSelected.emit(this.positionsChecked);
  }

  checkAll(): void {
    this.positionsChecked = this.positionsChecked.map(e => {
      e.checked = true;
      return e;
    });

    this.positionsSelected.emit(this.positionsChecked);
  }

  uncheckAll(): void {
    this.positionsChecked = this.positionsChecked.map(e => {
      e.checked = false;
      return e;
    });

    this.positionsSelected.emit(this.positionsChecked);
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
