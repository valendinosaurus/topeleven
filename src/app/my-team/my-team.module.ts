import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyTeamDevelopmentComponent } from './development/my-team-development/my-team-development.component';
import { MyTeamDragDropListComponent } from './my-team-strength/my-team-drag-drop-list/my-team-drag-drop-list.component';
import { MyTeamNewSnapshotButtonComponent } from './my-team-strength/my-team-new-snapshot-button/my-team-new-snapshot-button.component';
import { MyTeamPlayerPanelComponent } from './my-team-strength/my-team-player-panel/my-team-player-panel.component';
import { MyTeamStrengthContainerComponent } from './my-team-strength/my-team-strength-container/my-team-strength-container.component';
import { MyTeamPageComponent } from './page/my-team-page.component';

@NgModule({
  declarations: [
    MyTeamPageComponent,
    MyTeamStrengthContainerComponent,
    MyTeamPlayerPanelComponent,
    MyTeamDragDropListComponent,
    MyTeamNewSnapshotButtonComponent,
    MyTeamDevelopmentComponent,
  ],
  imports: [
    SharedModule,
    DragDropModule,
  ],
  exports: [
    MyTeamPageComponent
  ]
})
export class MyTeamModule { }
