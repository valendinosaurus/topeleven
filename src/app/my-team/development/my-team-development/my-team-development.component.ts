import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  graphData: Ng2ChartData;

  constructor(
    private snapshotAPIService: SnapshotAPIService,
    private chartService: Ng2ChartsService
  ) { }

  ngOnInit(): void {
    this.snapshotAPIService.getSnapshots(this.userId).subscribe(
      e => {
        this.graphData = this.chartService.mapSnapshotDataForNg2Chart(e, 'line');
      }
    );
  }

}
