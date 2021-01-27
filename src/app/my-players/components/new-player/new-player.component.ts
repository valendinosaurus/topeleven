/* eslint-disable @typescript-eslint/unbound-method */
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { take } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { PlayerService } from 'src/app/core/player.service';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from '../../../shared/models/position.interface';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnChanges {

  @Input() userId: string;
  @Input() allPositions: Position[];

  @Output() playerCreated = new EventEmitter<void>();

  player: Player;
  positionsChecked: {id: number; checked: boolean}[];
  formReady = false;

  constructor(
    private playerAPIService: PlayerAPIService,
    private playerService: PlayerService
  ) { }

  ngOnChanges(): void {
    if (!this.formReady && this.allPositions) {

      this.player = this.playerService.getEmptyPlayer(this.userId);

      this.player.mainPosition = this.allPositions[1].id;

      this.positionsChecked = this.allPositions.map(p => ({
        id: p.id,
        checked: false
      }));

      this.formReady = true;
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
    this.player.positions = this.positionsChecked.filter(p => p.checked).map(p => p.id);
  }

  createNewPlayer(): void {
    if (this.checkInputs()) {
      this.player.mainPosition = this.player.positions[0];

      this.playerAPIService.postPlayer({
        name: this.player.name,
        user: this.userId,
        positions: this.player.positions,
        mainPosition: this.player.mainPosition
      }).pipe(
        take(1)
      ).subscribe(e => {
        this.playerCreated.emit();
      });
    }

  }

  checkInputs(): boolean {
    if (this.player.name.length === 0) {
      alert('Bitte einen Namen eingeben');
      return false;
    }

    if (this.player.positions.length === 0) {
      alert('Bitte mindestens eine Position wählen');
      return false;
    }

    if (this.player.positions.length > 3) {
      alert('Ein Spieler kann höchstens 3 Positionen erlernen');
      return false;
    }

    return true;
  }

}
