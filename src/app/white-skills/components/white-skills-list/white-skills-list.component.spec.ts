import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteSkillsListComponent } from './white-skills-list.component';

describe('WhiteSkillsListComponent', () => {
  let component: WhiteSkillsListComponent;
  let fixture: ComponentFixture<WhiteSkillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteSkillsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
