import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutFunctionsViewComponent } from './components/about-functions-view/about-functions-view.component';
import { AboutInfoViewComponent } from './components/about-info-view/about-info-view.component';
import { AboutPageComponent } from './page/about-page.component';
import { AboutIssuesViewComponent } from './components/about-issues-view/about-issues-view.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutInfoViewComponent,
    AboutFunctionsViewComponent,
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
