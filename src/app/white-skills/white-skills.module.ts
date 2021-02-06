import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WhiteSkillsListComponent } from './components/white-skills-list/white-skills-list.component';

@NgModule({
  declarations: [WhiteSkillsListComponent],
  imports: [
    SharedModule
  ],
  exports: [WhiteSkillsListComponent]
})
export class WhiteSkillsModule { }
