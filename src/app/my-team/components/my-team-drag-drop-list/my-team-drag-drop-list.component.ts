import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { TeamAPIService } from 'src/app/core/team-api.service';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from 'src/app/shared/models/position.interface';

@Component({
  selector: 'app-my-team-drag-drop-list',
  templateUrl: './my-team-drag-drop-list.component.html',
  styleUrls: ['./my-team-drag-drop-list.component.scss']
})
export class MyTeamDragDropListComponent {

  @Input() userId: string;
  @Input() players: Player[];
  @Input() allPositions: Position[];

  @Output() seasonChanged = new EventEmitter<void>();

  constructor(
    private playerAPIService: PlayerAPIService,
    private teamAPIService: TeamAPIService
  ) {}

  drop(event: CdkDragDrop<Player[]>): void {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
    this.teamAPIService.postTeamOrder(
      this.userId,
      this.players.map(player => player.id)
    ).pipe(
      take(1)
    ).subscribe();
  }

  getStartingValue(): number {
    if (this.players) {
      const sum = this.players
        .slice(0, 11)
        .map(p => p.getMainPositionWhiteSkillValue())
        .reduce((s, v) => s + v, 0);

      return Math.floor(sum / 11);
    } else {
      return 0;
    }
  }

  getOverallValue(): number {
    if (this.players) {
      const sum = this.players
        .map(p => p.getMainPositionWhiteSkillValue())
        .reduce((s, v) => s + v, 0);

      return Math.floor(sum / this.players.length);
    } else {
      return 0;
    }
  }

  nextSeason(): void {
    if (confirm('Willst du wirklich weiterfahren? Dieser Schritt kann nicht rückgängig gemacht werden!')) {

      const observables$ = [];

      this.players.forEach(player =>
        observables$.push(
          this.playerAPIService.updatePlayer({
            ...player,
            reflexes: this.getNormalizedNextSeasonSkillValue(player.reflexes.value),
            agility: this.getNormalizedNextSeasonSkillValue(player.agility.value),
            anticipation: this.getNormalizedNextSeasonSkillValue(player.anticipation.value),
            rushingOut: this.getNormalizedNextSeasonSkillValue(player.rushingOut.value),
            communication: this.getNormalizedNextSeasonSkillValue(player.communication.value),
            throwing: this.getNormalizedNextSeasonSkillValue(player.throwing.value),
            kicking: this.getNormalizedNextSeasonSkillValue(player.kicking.value),
            punching: this.getNormalizedNextSeasonSkillValue(player.punching.value),
            aerialReach: this.getNormalizedNextSeasonSkillValue(player.aerialReach.value),
            concentration: this.getNormalizedNextSeasonSkillValue(player.concentration.value),
            tackling: this.getNormalizedNextSeasonSkillValue(player.tackling.value),
            marking: this.getNormalizedNextSeasonSkillValue(player.marking.value),
            positioning: this.getNormalizedNextSeasonSkillValue(player.positioning.value),
            heading: this.getNormalizedNextSeasonSkillValue(player.heading.value),
            bravery: this.getNormalizedNextSeasonSkillValue(player.bravery.value),
            passing: this.getNormalizedNextSeasonSkillValue(player.passing.value),
            dribbling: this.getNormalizedNextSeasonSkillValue(player.dribbling.value),
            crossing: this.getNormalizedNextSeasonSkillValue(player.crossing.value),
            shooting: this.getNormalizedNextSeasonSkillValue(player.shooting.value),
            finishing: this.getNormalizedNextSeasonSkillValue(player.finishing.value),
            fitnesse: this.getNormalizedNextSeasonSkillValue(player.fitnesse.value),
            strength: this.getNormalizedNextSeasonSkillValue(player.strength.value),
            aggression: this.getNormalizedNextSeasonSkillValue(player.aggression.value),
            speed: this.getNormalizedNextSeasonSkillValue(player.speed.value),
            creativity: this.getNormalizedNextSeasonSkillValue(player.creativity.value)
          }).pipe(
            take(1)
          )
        )
      );

      combineLatest(observables$).subscribe(
        () => this.seasonChanged.emit()
      );
    }
  }

  getNormalizedNextSeasonSkillValue(value: number): number {
    const newValue = value - 20;

    return newValue >= 1 ? newValue : 1;
  }

}
