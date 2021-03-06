import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';
import { SharedNavComponent } from './components/shared-nav/shared-nav.component';
import { SharedPositionsCheckboxesComponent } from './components/shared-positions-checkboxes/shared-positions-checkboxes.component';
import { SharedPositionsDropdownComponent } from './components/shared-positions-dropdown/shared-positions-dropdown.component';
import { SharedPositionsListComponent } from './components/shared-positions-list/shared-positions-list.component';
import {
  SharedSimplePositionCheckboxesComponent
} from './components/shared-simple-position-checkboxes/shared-simple-position-checkboxes.component';
import { SharedSimpleSkillCheckboxesComponent } from './components/shared-simple-skill-checkboxes/shared-simple-skill-checkboxes.component';

@NgModule({
  declarations: [
    SharedPositionsCheckboxesComponent,
    SharedPositionsDropdownComponent,
    SharedPositionsListComponent,
    SharedNavComponent,
    SharedSimplePositionCheckboxesComponent,
    SharedSimpleSkillCheckboxesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgbModalModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ChartsModule,
    MatRadioModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgbModalModule,
    SharedPositionsCheckboxesComponent,
    SharedPositionsDropdownComponent,
    SharedPositionsListComponent,
    AppRoutingModule,
    SharedNavComponent,
    MatProgressSpinnerModule,
    MatTabsModule,
    SharedSimplePositionCheckboxesComponent,
    SharedSimpleSkillCheckboxesComponent,
    ChartsModule,
    MatRadioModule
  ]
})
export class SharedModule { }
