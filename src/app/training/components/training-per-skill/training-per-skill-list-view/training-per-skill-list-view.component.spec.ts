import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPerSkillListViewComponent } from './training-per-skill-list-view.component';

describe('TrainingPerSkillListViewComponent', () => {
  let component: TrainingPerSkillListViewComponent;
  let fixture: ComponentFixture<TrainingPerSkillListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPerSkillListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPerSkillListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
