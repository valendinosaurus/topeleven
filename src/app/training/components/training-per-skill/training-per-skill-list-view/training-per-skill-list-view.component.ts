
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { allTrainingSessions } from 'src/app/shared/const/training-session-data.const';
import { Skill } from 'src/app/shared/models/skill.interface';
import { TrainingSession } from 'src/app/shared/models/training-session.interface';

@Component({
  selector: 'app-training-per-skill-list-view',
  templateUrl: './training-per-skill-list-view.component.html',
  styleUrls: ['./training-per-skill-list-view.component.scss']
})
export class TrainingPerSkillListViewComponent implements OnInit {
  @Input() allSkills$: Observable<Skill[]>;

  allTrainingSessions$: Observable<TrainingSession[]>;
  filteredTrainingSessions$: Observable<{t: TrainingSession; s: Skill[]}[]>;
  selectedSkills$ = new ReplaySubject<{id: number; checked: boolean}[]>();

  ngOnInit(): void {
    this.allTrainingSessions$ = of(allTrainingSessions);

    this.allSkills$.pipe(
      tap(
        (skills: Skill[]) => {
          const mapped = skills.map(
            (skill: Skill) => ({
              id: skill.id,
              checked: true
            })
          );

          this.selectedSkills$.next(mapped);
        }
      )
    );

    this.filteredTrainingSessions$ = combineLatest([
      this.allTrainingSessions$,
      this.selectedSkills$,
      this.allSkills$
    ]).pipe(
      debounceTime(600),
      map(
        ([sessions, selectedSkills, allSkills]: [TrainingSession[], {id: number; checked: boolean}[], Skill[]]) => {
          const sss = sessions.filter(
            (session: TrainingSession) =>
              selectedSkills
                .filter(s => s.checked)
                .map(s => s.id)
                .some(s => session.skills.includes(+s))
          );

          return sss.map(
            (session: TrainingSession) => ({
              t: session,
              s: allSkills.filter(s => session.skills.includes(+s.id))
            })
          );
        }
      )
    );

  }

  filterBySkill(skills: {id: number; checked: boolean}[]): void {
    this.selectedSkills$.next(skills);
  }

}
