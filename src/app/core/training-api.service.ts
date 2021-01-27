import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { serviceAPIUrl } from '../app.const';
import { TrainingSession } from '../shared/models/training-session.interface';

@Injectable({
  providedIn: 'root'
})
export class TrainingAPIService {

  constructor(
    private http: HttpClient
  ) {}

  getTrainingSessions(): Observable<TrainingSession[]> {
    const url = `${serviceAPIUrl}training-sessions`;
    return this.http.get<TrainingSession[]>(url).pipe(
      map(
        (sessions: TrainingSession[]) => sessions.map(
          (session: TrainingSession) => {

            if (session.skillsString !== null) {
              session.skills = session.skillsString.split(',').map(s => +s);
            } else {
              session.skills = [];
            }

            return session;
          }
        )
      )
    );
  }

}
