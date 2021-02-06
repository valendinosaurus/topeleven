import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSimpleSkillCheckboxesComponent } from './shared-simple-skill-checkboxes.component';

describe('SharedSimpleSkillCheckboxesComponent', () => {
  let component: SharedSimpleSkillCheckboxesComponent;
  let fixture: ComponentFixture<SharedSimpleSkillCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSimpleSkillCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSimpleSkillCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
