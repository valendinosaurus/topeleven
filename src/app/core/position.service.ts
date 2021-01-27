import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  isGoalkeeperByPositionId(positionId: number): boolean {
    return positionId === 1;
  }

  isGoalkeeperByPositionName(positionName: string): boolean {
    return positionName === 'GK';
  }

  isDefenceByPositionId(positionId: number): boolean {
    const defencePositionIds = [2, 3, 4];
    return defencePositionIds.includes(positionId);
  }

  isDefenceByPositionName(positionName: string): boolean {
    const defencePositionNames = ['DR', 'DC', 'DL'];
    return defencePositionNames.includes(positionName);
  }

  isMidfieldByPositionId(positionId: number): boolean {
    const midfieldPositionids = [5, 6, 7, 8, 9, 10, 11];
    return midfieldPositionids.includes(positionId);
  }

  isMidfieldByPositionName(positionName: string): boolean {
    const midfieldPositionNames = ['DMC', 'MR', 'MC', 'ML', 'AMR', 'AMC', 'AML'];
    return midfieldPositionNames.includes(positionName);
  }

  isAttackByPositionId(positionId: number): boolean {
    return positionId === 12;
  }

  isAttackByPositionName(positionName: string): boolean {
    return positionName === 'ST';
  }

}
