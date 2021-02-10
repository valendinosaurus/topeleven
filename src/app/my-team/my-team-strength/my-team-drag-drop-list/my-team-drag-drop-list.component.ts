import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { SnapshotService } from 'src/app/core/snapshot.service';
import { TeamAPIService } from 'src/app/core/team-api.service';
import { ToastrService } from 'src/app/core/toastr.service';
import { ErrorObject } from 'src/app/shared/models/error-object';
import { HbServerResponse } from 'src/app/shared/models/hb-server-response.interface';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from 'src/app/shared/models/position.interface';

@Component({
  selector: 'app-my-team-drag-drop-list',
  templateUrl: './my-team-drag-drop-list.component.html',
  styleUrls: ['./my-team-drag-drop-list.component.scss']
})
export class MyTeamDragDropListComponent implements OnDestroy {

  @Input() userId: string;
  @Input() players: Player[];
  @Input() allPositions: Position[];

  subs: Subscription[] = [];

  @Output() seasonChanged = new EventEmitter<void>();

  constructor(
    private playerAPIService: PlayerAPIService,
    private teamAPIService: TeamAPIService,
    private toastrService: ToastrService,
    private snapshotService: SnapshotService
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

  increaseAge(): void {
    if (confirm('Do you want to proceed? This step cannot be undone!')) {
      this.createSnapshot(this.increaseAgeOfAllPlayers.bind(this));
    }
  }

  increaseAgeOfAllPlayers(): void {
    const observables$ = [];

    this.players.forEach((player: Player) =>
      observables$.push(
        this.playerAPIService.updatePlayer({
          ...player,
          reflexes: player.reflexes.value,
          agility: player.agility.value,
          anticipation: player.anticipation.value,
          rushingOut: player.rushingOut.value,
          communication: player.communication.value,
          throwing: player.throwing.value,
          kicking: player.kicking.value,
          punching: player.punching.value,
          aerialReach: player.aerialReach.value,
          concentration: player.concentration.value,
          tackling: player.tackling.value,
          marking: player.marking.value,
          positioning: player.positioning.value,
          heading: player.heading.value,
          bravery: player.bravery.value,
          passing: player.passing.value,
          dribbling: player.dribbling.value,
          crossing: player.crossing.value,
          shooting: player.shooting.value,
          finishing: player.finishing.value,
          fitnesse: player.fitnesse.value,
          strength: player.strength.value,
          aggression: player.aggression.value,
          speed: player.speed.value,
          creativity: player.creativity.value,
          age: player.age + 1
        }).pipe(
          take(1)
        )
      )
    );

    const s = combineLatest(observables$).subscribe(
      () => {
        this.seasonChanged.emit();
        this.toastrService.success('Your players just got older!');
        this.createSnapshot(() => {});
      }
    );

    this.subs.push(s);
  }

  nextLevel(): void {
    if (confirm('Do you want to proceed? This step cannot be undone!')) {
      this.createSnapshot(this.goToNextLevel.bind(this));
    }
  }

  goToNextLevel(): void {
    const observables$ = [];

    this.players.forEach(player =>
      observables$.push(
        this.playerAPIService.updatePlayer({
          ...player,
          reflexes: this.getNormalizedNextLevelSkillValue(player.reflexes.value),
          agility: this.getNormalizedNextLevelSkillValue(player.agility.value),
          anticipation: this.getNormalizedNextLevelSkillValue(player.anticipation.value),
          rushingOut: this.getNormalizedNextLevelSkillValue(player.rushingOut.value),
          communication: this.getNormalizedNextLevelSkillValue(player.communication.value),
          throwing: this.getNormalizedNextLevelSkillValue(player.throwing.value),
          kicking: this.getNormalizedNextLevelSkillValue(player.kicking.value),
          punching: this.getNormalizedNextLevelSkillValue(player.punching.value),
          aerialReach: this.getNormalizedNextLevelSkillValue(player.aerialReach.value),
          concentration: this.getNormalizedNextLevelSkillValue(player.concentration.value),
          tackling: this.getNormalizedNextLevelSkillValue(player.tackling.value),
          marking: this.getNormalizedNextLevelSkillValue(player.marking.value),
          positioning: this.getNormalizedNextLevelSkillValue(player.positioning.value),
          heading: this.getNormalizedNextLevelSkillValue(player.heading.value),
          bravery: this.getNormalizedNextLevelSkillValue(player.bravery.value),
          passing: this.getNormalizedNextLevelSkillValue(player.passing.value),
          dribbling: this.getNormalizedNextLevelSkillValue(player.dribbling.value),
          crossing: this.getNormalizedNextLevelSkillValue(player.crossing.value),
          shooting: this.getNormalizedNextLevelSkillValue(player.shooting.value),
          finishing: this.getNormalizedNextLevelSkillValue(player.finishing.value),
          fitnesse: this.getNormalizedNextLevelSkillValue(player.fitnesse.value),
          strength: this.getNormalizedNextLevelSkillValue(player.strength.value),
          aggression: this.getNormalizedNextLevelSkillValue(player.aggression.value),
          speed: this.getNormalizedNextLevelSkillValue(player.speed.value),
          creativity: this.getNormalizedNextLevelSkillValue(player.creativity.value),
          age: player.age + 1
        }).pipe(
          take(1)
        )
      )
    );

    const s = combineLatest(observables$).subscribe(
      () => {
        this.seasonChanged.emit();
        this.toastrService.success('Dropped all players by 20% and increased their age!');
        this.createSnapshot(() => {});
      }
    );

    this.subs.push(s);
  }

  getNormalizedNextLevelSkillValue(value: number): number {
    return value - 20;
  }

  createSnapshot(callback: () => void): void {
    let response: HbServerResponse;

    this.snapshotService.createSnapshotFromPlayers(
      this.players,
      this.userId
    ).subscribe({
      next: (res: HbServerResponse) => response = res,
      error: (error: ErrorObject) => this.toastrService.error('Error while saving snapshot'),
      complete: () => {
        if (response.status === 'post_snapshot_success') {
          this.toastrService.success('Snapshot saved');
          callback();
        } else {
          this.toastrService.error('Error while saving snapshot');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}
