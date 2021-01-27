import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PositionAPIService } from 'src/app/core/position-api.service';
import { SkillAPIService } from 'src/app/core/skill-api.service';
import { PositionHasWhiteSkill } from 'src/app/shared/models/position-has-white-skill.interface';
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

  constructor(
    private positionAPIService: PositionAPIService,
    private skillAPIService: SkillAPIService
  ) {}

  ngOnInit(): void {
    this.allPositions$ = combineLatest([
      this.positionAPIService.getPositions(),
      this.positionAPIService.getWhiteSkills()
    ]).pipe(
      map(
        ([positions, positionHasWhiteSkills]: [Position[], PositionHasWhiteSkill[]]) =>
          positions.map(position => {
            position.whiteSkills = positionHasWhiteSkills.filter(p => p.position_id === position.id).map(p => p.skill_id);
            return position;
          })
      )
    );

    this.allSkills$ = this.skillAPIService.getSkills().pipe(
      shareReplay()
    );
  }

}
