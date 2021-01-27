import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { serviceAPIUrl } from 'src/app/app.const';
import { HbServerResponse } from 'src/app/shared/models/hb-server-response.interface';
import { PlayerPost } from '../my-players/models/player-post.interface';
import { PlayerPut } from '../shared/models/player-put.interface';
import { PlayerRaw } from '../shared/models/player-raw.interface';
import { Player } from '../shared/models/player.class';
import { Position } from '../shared/models/position.interface';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerAPIService {

  constructor(
    private http: HttpClient,
    private playerService: PlayerService
  ) { }

  public getPlayers = (userID: string, allPositions: Position[]): Observable<Player[]> => {
    const url = `${serviceAPIUrl}players/${userID}`;
    return this.http.get<PlayerRaw[]>(url).pipe(
      map(
        players => this.playerService.mapRawPlayersToPlayers(
          players,
          userID,
          allPositions
        )
      )
    );
  };

  public getPlayerHasPosiitons = (userID: string, playerId: number): Observable<PlayerRaw[]> => {
    const url = `${serviceAPIUrl}player-has-positions/${userID}/${playerId}`;
    return this.http.get<PlayerRaw[]>(url);
  };

  postPlayer(player: PlayerPost): Observable<HbServerResponse> {
    const url = `${serviceAPIUrl}player`;
    return this.http.post<HbServerResponse>(url, JSON.stringify(player));
  }

  updatePlayer(player: PlayerPut): Observable<HbServerResponse> {
    const url = `${serviceAPIUrl}player`;
    return this.http.put<HbServerResponse>(url, JSON.stringify(player));
  }

  deletePlayer(id: number, userID: string): Observable<HbServerResponse> {
    const url = `${serviceAPIUrl}player/${userID}/${id}`;
    return this.http.delete<HbServerResponse>(url);
  }
}
