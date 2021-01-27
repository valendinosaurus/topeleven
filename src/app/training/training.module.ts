import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TrainingPositionListViewComponent } from './components/training-position-list-view/training-position-list-view.component';
import { TrainingTrainingListViewComponent } from './components/training-training-list-view/training-training-list-view.component';
import { TrainingViewComponent } from './components/training-training-view/training-training-view.component';
import { TrainingPageComponent } from './page/training-page.component';

@NgModule({
  declarations: [TrainingPageComponent, TrainingViewComponent, TrainingTrainingListViewComponent, TrainingPositionListViewComponent],
  imports: [
    SharedModule
  ],
  exports: [
    TrainingPageComponent
  ]
})
export class TrainingModule { }
