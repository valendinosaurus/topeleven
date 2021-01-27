import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyTeamDragDropListComponent } from './components/my-team-drag-drop-list/my-team-drag-drop-list.component';
import { MyTeamPlayerPanelComponent } from './components/my-team-player-panel/my-team-player-panel.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { MyTeamPageComponent } from './page/my-team-page.component';

@NgModule({
  declarations: [
    MyTeamPageComponent,
    MyTeamComponent,
    MyTeamPlayerPanelComponent,
    MyTeamDragDropListComponent
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
