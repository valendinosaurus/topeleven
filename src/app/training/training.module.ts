import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  TrainingPerPositionListViewComponent
} from './components/training-per-position/training-per-position-list-view/training-per-position-list-view.component';
import {
  TrainingPerPositionViewComponent
} from './components/training-per-position/training-per-position-view/training-per-position-view.component';
import {
  TrainingPerSessionListViewComponent
} from './components/training-per-session/training-per-session-list-view/training-per-session-list-view.component';
import {
  TrainingPerSessionViewComponent
} from './components/training-per-session/training-per-session-view/training-per-session-view.component';
import { TrainingPageComponent } from './page/training-page.component';
import { TrainingPerPositionSessionViewComponent } from './components/training-per-position/training-per-position-session-view/training-per-position-session-view.component';
import { TrainingPerSkillListViewComponent } from './components/training-per-skill/training-per-skill-list-view/training-per-skill-list-view.component';
import { TrainingPerSessionTrainedSkillsViewComponent } from './components/training-per-session/training-per-session-trained-skills-view/training-per-session-trained-skills-view.component';
import { TrainingPerSessionPositionEfficiencyViewComponent } from './components/training-per-session/training-per-session-position-efficiency-view/training-per-session-position-efficiency-view.component';

@NgModule({
  declarations: [
    TrainingPageComponent,
    TrainingPerSessionViewComponent,
    TrainingPerSessionListViewComponent,
    TrainingPerPositionListViewComponent,
    TrainingPerPositionViewComponent,
    TrainingPerPositionSessionViewComponent,
    TrainingPerSkillListViewComponent,
    TrainingPerSessionTrainedSkillsViewComponent,
    TrainingPerSessionPositionEfficiencyViewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TrainingPageComponent
  ]
})
export class TrainingModule { }
