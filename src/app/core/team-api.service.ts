import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { serviceAPIUrl } from '../app.const';
import { HbServerResponse } from '../shared/models/hb-server-response.interface';
import { TeamOrder } from '../shared/models/team-order.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamAPIService {

  constructor(
    private http: HttpClient
  ) { }

  public getTeamOrder = (user: string): Observable<TeamOrder> => {
    const url = `${serviceAPIUrl}team-order/${user}`;
    return this.http.get<TeamOrder>(url).pipe(
      map(
        (order: TeamOrder) => {
          if (order === null || order === undefined) {
            return undefined;
          }

          order.order = order.torder.split(',').map(id => +id);
          return order;
        }
      )
    );
  };

  public postTeamOrder = (user: string, order: number[]): Observable<HbServerResponse> => {
    const stringOrder = order.join(',');
    const url = `${serviceAPIUrl}team-order`;

    return this.http.post<HbServerResponse>(
      url,
      JSON.stringify({
        user,
        order: stringOrder
      })
    );
  };

}
