import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPositionListViewComponent } from './training-position-list-view.component';

describe('TrainingPositionListViewComponent', () => {
  let component: TrainingPositionListViewComponent;
  let fixture: ComponentFixture<TrainingPositionListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPositionListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPositionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
