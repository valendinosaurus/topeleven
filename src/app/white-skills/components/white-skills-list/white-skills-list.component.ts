import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionAPIService } from 'src/app/core/position-api.service';
import { SkillAPIService } from 'src/app/core/skill-api.service';
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

  constructor(
    private positionAPIService: PositionAPIService,
    private skillAPIService: SkillAPIService
  ) { }

  ngOnInit(): void {
    this.allPositions$ = this.positionAPIService.getPositions();

    this.allSkills$ = this.skillAPIService.getSkills();

    this.allPositionHasWhiteSkills$ = this.positionAPIService.getWhiteSkills();
  }

}
