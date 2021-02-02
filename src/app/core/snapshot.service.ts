import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HbServerResponse } from '../shared/models/hb-server-response.interface';
import { Player } from '../shared/models/player.class';
import { SnapshotElement } from '../shared/models/snapshot-element.interface';
import { Snapshot } from '../shared/models/snapshot.interface';
import { SnapshotAPIService } from './snapshot-api.service';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  constructor(
    private snapshotAPIService: SnapshotAPIService
  ) {}

  createSnapshotFromPlayers(players: Player[], userId: string): Observable<HbServerResponse> {
    const snapShotElements: SnapshotElement[] = players.map(
      (player: Player) => ({
        name: player.name,
        playerId: player.id,
        sid: -1,
        topeleven: player.getTopElevenValue(),
        whiteskill: player.getWhiteSkillValue(),
        position: player.getMainPositionWhiteSkillValue()
      })
    );

    const snapshot: Snapshot = {
      id: null,
      timestamp: new Date(),
      user: userId,
      values: snapShotElements
    };

    return this.snapshotAPIService.postSnapshot(snapshot);
  }

}
