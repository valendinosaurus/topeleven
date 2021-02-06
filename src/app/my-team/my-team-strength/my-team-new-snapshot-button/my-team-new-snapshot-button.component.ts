import { Component, Input } from '@angular/core';
import { SnapshotService } from 'src/app/core/snapshot.service';
import { ToastrService } from 'src/app/core/toastr.service';
import { ErrorObject } from 'src/app/shared/models/error-object';
import { HbServerResponse } from 'src/app/shared/models/hb-server-response.interface';
import { Player } from 'src/app/shared/models/player.class';

@Component({
  selector: 'app-my-team-new-snapshot-button',
  templateUrl: './my-team-new-snapshot-button.component.html',
  styleUrls: ['./my-team-new-snapshot-button.component.scss']
})
export class MyTeamNewSnapshotButtonComponent {

  @Input() allPlayers: Player[];
  @Input() userId: string;

  constructor(
    private snapshotService: SnapshotService,
    private toastrService: ToastrService
  ) {}

  createSnapShot(): void {
    let response: HbServerResponse;

    this.snapshotService.createSnapshotFromPlayers(
      this.allPlayers,
      this.userId
    ).subscribe({
      next: (res: HbServerResponse) => response = res,
      error: (error: ErrorObject) => this.toastrService.error('Error while saving snapshot'),
      complete: () => {
        if (response.status === 'post_snapshot_success') {
          this.toastrService.success('Snapshot saved');
        } else {
          this.toastrService.error('Error while saving snapshot');
        }
      }
    });

  }

}
