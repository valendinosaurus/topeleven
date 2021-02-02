import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { allPositions } from 'src/app/shared/const/position-data.const';
import { PositionHasWhiteSkill } from 'src/app/shared/models/position-has-white-skill.interface';
import { Position } from 'src/app/shared/models/position.interface';
import { Skill } from 'src/app/shared/models/skill.interface';

@Component({
  selector: 'app-white-skills-list',
  templateUrl: './white-skills-list.component.html',
  styleUrls: ['./white-skills-list.component.scss']
})
export class WhiteSkillsListComponent implements OnInit {

  allPositions$: Observable<Position[]>;
  allSkills$: Observable<Skill[]>;
  allPositionHasWhiteSkills$: Observable<PositionHasWhiteSkill[]>;

  ngOnInit(): void {
    this.allPositions$ = of(allPositions);
  }

}
