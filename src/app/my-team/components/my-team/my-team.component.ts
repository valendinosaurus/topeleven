import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PlayerAPIService } from 'src/app/core/player-api.service';
import { SnapshotService } from 'src/app/core/snapshot.service';
import { TeamAPIService } from 'src/app/core/team-api.service';
import { allPositions } from 'src/app/shared/const/position-data.const';
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
    private playerAPIService: PlayerAPIService,
    private teamAPIService: TeamAPIService,
    private snapshotService: SnapshotService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userId) {
      if (this.userId) {
        this.allPositions$ = of(allPositions);
        this.fetchPlayers(false);
      }

    }
  }

  fetchPlayers(afterNextSeason: boolean): void {
    this.allPlayers$ = this.allPositions$.pipe(
      switchMap(
        positions => this.playerAPIService.getPlayers(this.userId, positions)
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

          const cleanedSortedPlayers = sortedPlayers.filter(p => p);

          const pushedPlayerIds: number[] = cleanedSortedPlayers.map(p => p.id);
          const remainingPlayers: number[] = allPlayerIds.filter((n: number) => !pushedPlayerIds.includes(n));

          cleanedSortedPlayers.push(
            ...players.filter(p => remainingPlayers.includes(p.id))
          );

          return cleanedSortedPlayers;
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
