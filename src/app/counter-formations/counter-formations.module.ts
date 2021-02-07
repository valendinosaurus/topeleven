import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CounterFormationViewComponent } from './components/counter-formation-view/counter-formation-view.component';
import { CounterFormationsHeaderComponent } from './components/counter-formations-header/counter-formations-header.component';
import { CounterFormationsListViewComponent } from './components/counter-formations-list-view/counter-formations-list-view.component';
import { CounterFormationPageComponent } from './page/counter-formation-page.component';

@NgModule({
  declarations: [
    CounterFormationPageComponent,
    CounterFormationsListViewComponent,
    CounterFormationViewComponent,
    CounterFormationsHeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CounterFormationPageComponent
  ]
})
export class CounterFormationsModule { }
