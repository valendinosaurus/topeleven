import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { allTrainingSessions } from 'src/app/shared/const/training-session-data.const';
import { Position } from 'src/app/shared/models/position.interface';
import { Skill } from 'src/app/shared/models/skill.interface';
import { TrainingSession } from 'src/app/shared/models/training-session.interface';
import { PositionTrainingObject, TrainingEffectiveness } from '../../../models/position-training-object.interface';

@Component({
  selector: 'app-training-per-position-list-view',
  templateUrl: './training-per-position-list-view.component.html',
  styleUrls: ['./training-per-position-list-view.component.scss']
})
export class TrainingPerPositionListViewComponent implements OnInit {
  @Input() allSkills$: Observable<Skill[]>;
  @Input() allPositions$: Observable<Position[]>;

  combinedObjects$: Observable<PositionTrainingObject[]>;
  selectedPositions$ = new ReplaySubject<{id: number; checked: boolean}[]>();

  ngOnInit(): void {
    const allTrainingSessions$ = of(allTrainingSessions);

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

          this.selectedPositions$.next(mapped);
        }
      ),
      map(
        ([sessions, skills, positions]: [TrainingSession[], Skill[], Position[]]) =>
          this.mapPositionToEffectiveness(sessions, skills, positions)
      )
    );
  }

  mapPositionToEffectiveness(sessions: TrainingSession[], skills: Skill[], positions: Position[]): PositionTrainingObject[] {
    const samePositions = [
      [ 1 ],
      [ 2, 4],
      [ 3 ],
      [ 5 ],
      [ 6, 8 ],
      [ 7 ],
      [ 9, 11 ],
      [ 10 ],
      [ 12 ]
    ];

    const positionTrainingObjects: PositionTrainingObject[] = [];

    samePositions.forEach(
      (positionObject: number[]) => {
        const position = positions.find(p => p.id === positionObject[0]);

        positionTrainingObjects.push({
          positions: positions.filter(p => positionObject.includes(p.id)),
          efficiencyPerTrainingSession: this.getEffectivenessPerSession(
            position,
            sessions,
            skills
          )
        });
      }
    );

    return positionTrainingObjects;
  }

  getEffectivenessPerSession(position: Position, sessions: TrainingSession[], allSkills: Skill[]): TrainingEffectiveness[] {
    const whiteSkillsToTrain = position.whiteSkills;
    const numberOfWhiteSkillsToTrain = whiteSkillsToTrain.length;

    const efficiencyObject: TrainingEffectiveness[] = [];

    sessions.forEach(
      (session: TrainingSession) => {
        const trainedSkills = session.skills;

        const trainedWhiteSkills = trainedSkills.filter(
          x => whiteSkillsToTrain.some(
            y => y === x
          )
        );

        const numberOfTrainedWhiteSkills = trainedWhiteSkills.length;
        const efficiency = Math.ceil(numberOfTrainedWhiteSkills / numberOfWhiteSkillsToTrain * 100);

        if (efficiency > 0) {
          efficiencyObject.push({
            ...session,
            affectedWhiteSkills: allSkills.filter(s => trainedWhiteSkills.includes(+s.id)),
            efficiency
          });
        }
      }
    );

    return efficiencyObject.sort(
      (a: TrainingEffectiveness, b: TrainingEffectiveness) => b.efficiency - a.efficiency
    );
  }

  shouldDisplayElement(element: PositionTrainingObject, selectedPositions: {id: number; checked: boolean}[]): boolean {
    return element.positions.map(p => p.id).some(
      id => selectedPositions.filter(e => e.checked).map(e => e.id).includes(id)
    );
  }

  filterByPositions(positions: {id: number; checked: boolean}[]): void {
    this.selectedPositions$.next(positions);
  }

}
