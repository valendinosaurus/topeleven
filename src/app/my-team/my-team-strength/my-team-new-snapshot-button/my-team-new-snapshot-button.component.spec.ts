import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamNewSnapshotButtonComponent } from './my-team-new-snapshot-button.component';

describe('MyTeamNewSnapshotButtonComponent', () => {
  let component: MyTeamNewSnapshotButtonComponent;
  let fixture: ComponentFixture<MyTeamNewSnapshotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamNewSnapshotButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamNewSnapshotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
