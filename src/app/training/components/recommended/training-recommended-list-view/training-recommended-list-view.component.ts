
import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Position } from 'src/app/shared/models/position.interface';
import { recommendedDrillSequences, recommendedPowerDrillSequences } from 'src/app/training/const/recommended.const';
import { DrillSequence } from 'src/app/training/models/drill-sequence.interface';

@Component({
  selector: 'app-training-recommended-list-view',
  templateUrl: './training-recommended-list-view.component.html',
  styleUrls: ['./training-recommended-list-view.component.scss']
})
export class TrainingRecommendedListViewComponent implements OnInit {
  @Input() allPositions: Position[];

  drillSequences$: Observable<DrillSequence[]>;
  powerDrillSequences$: Observable<DrillSequence[]>;

  filteredDrillSequences$: Observable<DrillSequence[]>;
  filteredPowerDrillSequences$: Observable<DrillSequence[]>;

  mode: 'normal' | 'power' = 'normal';

  selectedPositions$ = new ReplaySubject<{id: number; checked: boolean}[]>();

  ngOnInit(): void {
    this.selectedPositions$.next(this.allPositions.map(
      (position: Position) => ({
        id: position.id,
        checked: true
      })
    ));

    this.drillSequences$ = of(recommendedDrillSequences);
    this.powerDrillSequences$ = of(recommendedPowerDrillSequences);

    this.filteredDrillSequences$ = combineLatest([
      this.drillSequences$,
      this.selectedPositions$
    ]).pipe(
      map(
        ([sequences, selection]: [DrillSequence[], {id: number; checked: boolean}[]]) => {
          const selectedPositions = selection.filter(s => s.checked).map(s => s.id);

          return sequences.filter(s => selectedPositions.some(p => s.positions.includes(p)));
        }
      )
    );

    this.filteredPowerDrillSequences$ = combineLatest([
      this.powerDrillSequences$,
      this.selectedPositions$
    ]).pipe(
      map(
        ([sequences, selection]: [DrillSequence[], {id: number; checked: boolean}[]]) => {
          const selectedPositions = selection.filter(s => s.checked).map(s => s.id);

          return sequences.filter(s => selectedPositions.some(p => s.positions.includes(p)));
        }
      )
    );
  }

  filterByPositions(positions: {id: number; checked: boolean}[]): void {
    this.selectedPositions$.next(positions);
  }

}
