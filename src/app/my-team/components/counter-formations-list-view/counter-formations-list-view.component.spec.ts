import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFormationsListViewComponent } from './counter-formations-list-view.component';

describe('CounterFormationsListViewComponent', () => {
  let component: CounterFormationsListViewComponent;
  let fixture: ComponentFixture<CounterFormationsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterFormationsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterFormationsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
