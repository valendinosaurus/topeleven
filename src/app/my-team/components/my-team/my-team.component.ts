import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { PositionAPIService } from 'src/app/core/position-api.service';
import { SnapshotService } from 'src/app/core/snapshot.service';
import { TeamAPIService } from 'src/app/core/team-api.service';
import { HbServerResponse } from 'src/app/shared/models/hb-server-response.interface';
import { Player } from 'src/app/shared/models/player.class';
import { PositionHasWhiteSkill } from 'src/app/shared/models/position-has-white-skill.interface';
import { Position } from 'src/app/shared/models/position.interface';
import { TeamOrder } from 'src/app/shared/models/team-order.interface';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnChanges {

  @Input() userId: string;

  allPositions$: Observable<Position[]>;
  allPlayers$: Observable<Player[]>;
  sortedPlayers$: Observable<Player[]>;
  teamOrder$: Observable<TeamOrder>;

  constructor(
    private positionAPIService: PositionAPIService,
    private playerAPIService: PlayerAPIService,
    private teamAPIService: TeamAPIService,
    private snapshotService: SnapshotService
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

        this.fetchPlayers(false);
      }

    }
  }

  fetchPlayers(afterNextSeason: boolean): void {
    this.allPlayers$ = this.allPositions$.pipe(
      switchMap(
        allPositions => this.playerAPIService.getPlayers(this.userId, allPositions)
      )
    );

    this.teamOrder$ = this.teamAPIService.getTeamOrder(this.userId);

    this.sortedPlayers$ = combineLatest([
      this.allPlayers$,
      this.teamOrder$
    ]).pipe(
      map(
        ([players, order]: [Player[], TeamOrder]) => {
          const sortedPlayers: Player[] = [];
          const allPlayerIds: number[] = players.map(p => p.id);

          if (order === undefined) {
            return players;
          }

          order.order.forEach((id: number) =>
            sortedPlayers.push(
              players.find((player: Player) => player.id === id)
            )
          );

          const pushedPlayerIds: number[] = sortedPlayers.map(p => p.id);
          const remainingPlayers: number[] = allPlayerIds.filter((n: number) => !pushedPlayerIds.includes(n));

          sortedPlayers.push(
            ...players.filter(p => remainingPlayers.includes(p.id))
          );

          return sortedPlayers;
        }
      ),
      switchMap(
        (players: Player[]) =>
          afterNextSeason
            ? this.snapshotService.createSnapshotFromPlayers(players, this.userId).pipe(
              switchMap(
                (response: HbServerResponse) => of(players)
              )
            )
            : of(players)
      )
    );

  }

  mapWhiteSkillsToPosition(positions: Position[], whiteSkills: PositionHasWhiteSkill[]): Position[] {
    return positions.map(position => {
      position.whiteSkills = whiteSkills.filter(w => w.position_id === position.id).map(ws => ws.skill_id);
      return position;
    });
  }

}
