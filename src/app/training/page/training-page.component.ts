import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { allPositions } from 'src/app/shared/const/position-data.const';
import { allSkills } from 'src/app/shared/const/skill-data.const';
import { Position } from 'src/app/shared/models/position.interface';
import { Skill } from 'src/app/shared/models/skill.interface';

@Component({
  selector: 'app-training-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss']
})
export class TrainingPageComponent implements OnInit {

  allPositions$: Observable<Position[]>;
  allSkills$: Observable<Skill[]>;

  ngOnInit(): void {
    this.allPositions$ = of(allPositions);
    this.allSkills$ = of (allSkills);
  }

}
