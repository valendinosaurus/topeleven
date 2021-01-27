import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { serviceAPIUrl } from 'src/app/app.const';
import { Skill } from 'src/app/shared/models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillAPIService {

  constructor(
    private http: HttpClient
  ) { }

  public getSkills = (): Observable<Skill[]> => {
    const url = `${serviceAPIUrl}skills`;
    return this.http.get<Skill[]>(url);
  };
}
