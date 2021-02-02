import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyTeamDragDropListComponent } from './components/my-team-drag-drop-list/my-team-drag-drop-list.component';
import { MyTeamNewSnapshotButtonComponent } from './components/my-team-new-snapshot-button/my-team-new-snapshot-button.component';
import { MyTeamPlayerPanelComponent } from './components/my-team-player-panel/my-team-player-panel.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { MyTeamPageComponent } from './page/my-team-page.component';
import { MyTeamDevelopmentComponent } from './components/my-team-development/my-team-development.component';
import { CounterFormationsListViewComponent } from './components/counter-formations-list-view/counter-formations-list-view.component';
import { FormationViewComponent } from './components/formation-view/formation-view.component';

@NgModule({
  declarations: [
    MyTeamPageComponent,
    MyTeamComponent,
    MyTeamPlayerPanelComponent,
    MyTeamDragDropListComponent,
    MyTeamNewSnapshotButtonComponent,
    MyTeamDevelopmentComponent,
    CounterFormationsListViewComponent,
    FormationViewComponent
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
