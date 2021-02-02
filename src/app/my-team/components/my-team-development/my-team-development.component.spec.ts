import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamDevelopmentComponent } from './my-team-development.component';

describe('MyTeamDevelopmentComponent', () => {
  let component: MyTeamDevelopmentComponent;
  let fixture: ComponentFixture<MyTeamDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
