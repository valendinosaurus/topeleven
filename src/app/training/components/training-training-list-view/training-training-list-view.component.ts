
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TrainingAPIService } from 'src/app/core/training-api.service';
import { Position } from 'src/app/shared/models/position.interface';
import { Skill } from 'src/app/shared/models/skill.interface';
import { TrainingSession } from 'src/app/shared/models/training-session.interface';
import { PositionEffectiveness, TrainingSessionSkillObject } from '../../models/training-session-skill-object.interface';

@Component({
  selector: 'app-training-training-list-view',
  templateUrl: './training-training-list-view.component.html',
  styleUrls: ['./training-training-list-view.component.scss']
})
export class TrainingTrainingListViewComponent implements OnInit {
  @Input() allSkills$: Observable<Skill[]>;
  @Input() allPositions$: Observable<Position[]>;

  combinedObjects$: Observable<TrainingSessionSkillObject[]>;
  selectedPositions$ = new ReplaySubject<{id: number; checked: boolean}[]>();

  constructor(
    private trainingAPIService: TrainingAPIService
  ) { }

  ngOnInit(): void {
    const allTrainingSessions$ = this.trainingAPIService.getTrainingSessions();

    this.combinedObjects$ = combineLatest([
      allTrainingSessions$,
      this.allSkills$,
      this.allPositions$
    ]).pipe(
      tap(
        ([a, b, positions]: [TrainingSession[], Skill[], Position[]]) => {
          const mapped = positions.map(
            (position: Position) => ({
              id: position.id,
              checked: true
            })
          );

          console.log('next ');
          console.log(mapped);
          this.selectedPositions$.next(mapped);
        }
      ),
      map(
        ([sessions, skills, positions]: [TrainingSession[], Skill[], Position[]]) =>
          sessions.map(
            (session: TrainingSession) => ({
              session,
              skillsString: session.skillsString,
              skills: skills.filter(skill => session.skills.includes(+skill.id)),
              effectivenessPerPosition: this.getEffectivenessPerPosition(
                session,
                positions,
                skills
              )
            })
          )
      )
    );
  }

  getEffectivenessPerPosition(session: TrainingSession, positions: Position[], allSkills: Skill[]): PositionEffectiveness[] {
    const trainedSkills = session.skills;
    const numberOfTrainedSkills = trainedSkills.length;

    const affectedPositions: Position[] = positions.filter(
      (position: Position) => position.whiteSkills.some(x => trainedSkills.includes(x))
    );

    const effectivenessObject: PositionEffectiveness[] = [];

    affectedPositions.forEach(
      (position: Position) => {
        const trainedWhiteSkills = trainedSkills.filter(
          x => position.whiteSkills.some(
            y => y === x
          )
        );

        const numberOfTrainedWhiteSkills = trainedWhiteSkills.length;

        effectivenessObject.push({
          ...position,
          trainedWhiteSkills: allSkills.filter(s => trainedWhiteSkills.includes(+s.id)),
          effectiveness: numberOfTrainedWhiteSkills / numberOfTrainedSkills
        });
      }
    );

    return effectivenessObject.sort(
      (a: PositionEffectiveness, b: PositionEffectiveness) => b.effectiveness - a.effectiveness
    );
  }

  filterByPositions(positions: {id: number; checked: boolean}[]): void {
    this.selectedPositions$.next(positions);
  }

}
