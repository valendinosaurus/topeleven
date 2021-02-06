/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { ToastrService } from 'src/app/core/toastr.service';
import { ErrorObject } from 'src/app/shared/models/error-object';
import { HbServerResponse } from 'src/app/shared/models/hb-server-response.interface';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from '../../../shared/models/position.interface';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss']
})
export class PlayerPanelComponent {
  @Input() userId: string;
  @Input() player: Player;
  @Input() allPositions: Position[];
  @Output() playerDeleted = new EventEmitter<number>();

  playerFormGroup: FormGroup;
  formReady = false;
  editMode = false;

  positions: Position[];

  skillsToggled = true;

  constructor(
    private playerAPIService: PlayerAPIService,
    private toastrService: ToastrService,
    private change: ChangeDetectorRef
  ) {}

  updatePlayer(): void {
    this.editMode = false;

    let response: HbServerResponse;

    this.playerAPIService.updatePlayer({
      ...this.player,
      reflexes: this.player.reflexes.value,
      agility: this.player.agility.value,
      anticipation: this.player.anticipation.value,
      rushingOut: this.player.rushingOut.value,
      communication: this.player.communication.value,
      throwing: this.player.throwing.value,
      kicking: this.player.kicking.value,
      punching: this.player.punching.value,
      aerialReach: this.player.aerialReach.value,
      concentration: this.player.concentration.value,
      tackling: this.player.tackling.value,
      marking: this.player.marking.value,
      positioning: this.player.positioning.value,
      heading: this.player.heading.value,
      bravery: this.player.bravery.value,
      passing: this.player.passing.value,
      dribbling: this.player.dribbling.value,
      crossing: this.player.crossing.value,
      shooting: this.player.shooting.value,
      finishing: this.player.finishing.value,
      fitnesse: this.player.fitnesse.value,
      strength: this.player.strength.value,
      aggression: this.player.aggression.value,
      speed: this.player.speed.value,
      creativity: this.player.creativity.value
    }).pipe(
      take(1)
    ).subscribe({
      next: (res: HbServerResponse) => response = res,
      error: (error: ErrorObject) => this.toastrService.error('Error while updating player'),
      complete: () => {
        if (response.status === 'update_player_success') {
          this.toastrService.success('Player updated');
          this.change.detectChanges();
        } else {
          this.toastrService.error('Error while updating player');
        }
      }
    });
  }

  setCheckedPositions(positions: number[]): void {
    this.player.positions = positions;
  }

  setMainPosition(position: number): void {
    this.player.mainPosition = position;
  }

  setEditMode(editMode: boolean): void {
    this.editMode = editMode;
  }

  deletePlayer(): void {
    let response: HbServerResponse;

    this.playerAPIService.deletePlayer(
      this.player.id,
      this.userId
    ).pipe(
      take(1)
    ).subscribe({
      next: (res: HbServerResponse) => response = res,
      error: (error: ErrorObject) => this.toastrService.error('Error while creating player'),
      complete: () => {
        if (response.status === 'delete_player_success') {
          this.toastrService.success('Player deleted');
          this.playerDeleted.emit(this.player.id);
        } else {
          this.toastrService.error('Error while creating player');
        }
      }
    }
    );
  }

  toggleSkills(): void {
    this.skillsToggled = !this.skillsToggled;
  }
}
