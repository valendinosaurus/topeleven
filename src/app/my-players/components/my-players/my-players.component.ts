import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { PositionAPIService } from 'src/app/core/position-api.service';
import { Player } from 'src/app/shared/models/player.class';
import { Position } from 'src/app/shared/models/position.interface';
import { PositionHasWhiteSkill } from '../../../shared/models/position-has-white-skill.interface';

@Component({
  selector: 'app-my-players',
  templateUrl: './my-players.component.html',
  styleUrls: ['./my-players.component.scss']
})
export class MyPlayersComponent implements OnChanges {

  @Input() userId: string;

  @ViewChild('newPlayerModal') newPlayerModal: ElementRef;

  private deleteTrigger$ = new ReplaySubject<void>();

  allPositions$: Observable<Position[]>;
  allPlayers$: Observable<Player[]>;
  sortedPlayers$: Observable<Player[]>;

  private deletedPlayers: number[] = [];

  constructor(
    private positionAPIService: PositionAPIService,
    private playerAPIService: PlayerAPIService,
    private modal: NgbModal
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId) {
      if (this.userId) {
        this.allPositions$ = combineLatest([
          this.positionAPIService.getPositions(),
          this.positionAPIService.getWhiteSkills()
        ]).pipe(
          map(
            ([positions, positionHasWhiteSkills]: [Position[], PositionHasWhiteSkill[]]) =>
              this.mapWhiteSkillsToPosition(positions, positionHasWhiteSkills)
          ),
          shareReplay()
        );

        this.fetchPlayers();
      }

    }
  }

  fetchPlayers(): void {
    this.allPlayers$ = this.allPositions$.pipe(
      switchMap(
        allPositions => this.playerAPIService.getPlayers(this.userId, allPositions)
      )
    );

    this.sortedPlayers$ = combineLatest([
      this.deleteTrigger$,
      this.allPlayers$
    ]).pipe(
      map(
        ([_, allPlayers]: [void, Player[]]) =>
          allPlayers.filter(p => !this.deletedPlayers.includes(p.id))
      )
    );

    this.deleteTrigger$.next();
  }

  openNewPlayerModal(): void {
    this.modal.open(this.newPlayerModal);
  }

  mapWhiteSkillsToPosition(positions: Position[], whiteSkills: PositionHasWhiteSkill[]): Position[] {
    return positions.map(position => {
      position.whiteSkills = whiteSkills.filter(w => w.position_id === position.id).map(ws => ws.skill_id);
      return position;
    });
  }

  removePlayer(playerId: number): void {
    this.deletedPlayers.push(playerId);
    this.deleteTrigger$.next();
  }

  playerCreated(): void {
    this.modal.dismissAll();
    this.fetchPlayers();
  }

}
