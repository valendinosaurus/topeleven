import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { serviceAPIUrl } from 'src/app/app.const';
import { PositionHasWhiteSkill } from '../shared/models/position-has-white-skill.interface';
import { Position } from '../shared/models/position.interface';

@Injectable({
  providedIn: 'root'
})
export class PositionAPIService {

  constructor(
    private http: HttpClient
  ) { }

  public getPositions = (): Observable<Position[]> => {
    const url = `${serviceAPIUrl}positions`;
    return this.http.get<Position[]>(url).pipe(
      map(positions => positions.map(p => ({
        ...p,
        id: +p.id
      })))
    );
  };

  public getWhiteSkills = (): Observable<PositionHasWhiteSkill[]> => {
    const url = `${serviceAPIUrl}white-skills`;
    return this.http.get<PositionHasWhiteSkill[]>(url).pipe(
      map(positions => positions.map(p => ({
        position_id: +p.position_id,
        skill_id: +p.skill_id
      })))
    );
  };
}
