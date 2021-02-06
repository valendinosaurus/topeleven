import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { serviceAPIUrl } from '../app.const';
import { HbServerResponse } from '../shared/models/hb-server-response.interface';
import { SnapshotAPIResponseElement } from '../shared/models/snapshot-element.interface';
import { Snapshot } from '../shared/models/snapshot.interface';

@Injectable({
  providedIn: 'root'
})
export class SnapshotAPIService {

  constructor(
    private http: HttpClient
  ) { }

  public getSnapshots = (user: string): Observable<Snapshot[]> => {
    const url = `${serviceAPIUrl}snapshot/${user}`;
    return this.http.get<SnapshotAPIResponseElement[]>(url).pipe(
      map(
        (snapshotElements: SnapshotAPIResponseElement[]) => {
          const snapshotIds: number[] = snapshotElements.map(s => s.sid);
          const distinctIds: number[] = [];

          for (const id of snapshotIds) {
            if (!distinctIds.includes(id)) {
              distinctIds.push(id);
            }
          }

          const snapshots: Snapshot[] = [];

          for (const id of distinctIds) {
            snapshots.push({
              id,
              timestamp: snapshotElements.find(s => s.sid === id).timestamp,
              user: snapshotElements.find(s => s.sid === id).user,
              values: snapshotElements.filter(s => s.sid === id)
            });
          }

          return snapshots;
        }
      )
    );
  };

  public postSnapshot = (snapshot: Snapshot): Observable<HbServerResponse> => {
    const url = `${serviceAPIUrl}snapshot`;
    return this.http.post<HbServerResponse>(url, JSON.stringify(snapshot));
  };
}
