import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutInfoViewComponent } from './components/about-info-view/about-info-view.component';
import { AboutIssuesViewComponent } from './components/about-issues-view/about-issues-view.component';
import { AboutManualViewComponent } from './components/about-manual-view/about-manual-view.component';
import { AboutPageComponent } from './page/about-page.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutInfoViewComponent,
    AboutManualViewComponent,
    AboutIssuesViewComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AboutPageComponent,
  ]
})
export class AboutModule { }
