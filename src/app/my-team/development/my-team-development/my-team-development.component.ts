import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ng2ChartsService } from 'src/app/core/ng2-charts.service';
import { SnapshotAPIService } from 'src/app/core/snapshot-api.service';
import { Ng2ChartData } from 'src/app/shared/models/ng2-chart-data';
import { Snapshot } from 'src/app/shared/models/snapshot.interface';

@Component({
  selector: 'app-my-team-development',
  templateUrl: './my-team-development.component.html',
  styleUrls: ['./my-team-development.component.scss']
})
export class MyTeamDevelopmentComponent implements OnInit {

  @Input() userId: string;

  allSnapshots$: Observable<Snapshot[]>;

  skillType$ = new ReplaySubject<'mpw' | 'ws' | 'te'>();

  graphData$: Observable<Ng2ChartData>;

  constructor(
    private snapshotAPIService: SnapshotAPIService,
    private chartService: Ng2ChartsService
  ) { }

  ngOnInit(): void {
    this.graphData$ = combineLatest([
      this.snapshotAPIService.getSnapshots(this.userId),
      this.skillType$
    ]).pipe(
      map(
        ([snapshots, skillType]: [Snapshot[], 'mpw' | 'ws' | 'te']) =>
          this.chartService.mapSnapshotDataForNg2Chart(snapshots, 'line', skillType)
      )
    );

    this.skillType$.next('mpw');
  }

  filter(skillType: 'mpw' | 'ws' | 'te'): void {
    this.skillType$.next(skillType);
  }

}
