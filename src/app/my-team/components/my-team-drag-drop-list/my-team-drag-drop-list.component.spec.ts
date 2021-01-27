import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamDragDropListComponent } from './my-team-drag-drop-list.component';

describe('MyTeamDragDropListComponent', () => {
  let component: MyTeamDragDropListComponent;
  let fixture: ComponentFixture<MyTeamDragDropListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamDragDropListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamDragDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
