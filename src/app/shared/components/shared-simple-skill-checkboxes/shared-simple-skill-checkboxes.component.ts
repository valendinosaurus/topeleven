import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-shared-simple-skill-checkboxes',
  templateUrl: './shared-simple-skill-checkboxes.component.html',
  styleUrls: ['./shared-simple-skill-checkboxes.component.scss']
})
export class SharedSimpleSkillCheckboxesComponent implements OnInit {

  @Input() allSkills: Skill[];

  skillsChecked: {id: number; checked: boolean}[] = [];

  @Output() skillSelected = new EventEmitter<{id: number; checked: boolean}[]>();

  ngOnInit(): void {
    this.skillsChecked = this.allSkills.map(
      (skill: Skill) => ({
        id: skill.id,
        checked: false
      })
    );
  }

  checkSkill(skillId: number, checked: boolean): void {
    this.skillsChecked[skillId - 1].checked = checked;

    this.skillSelected.emit(this.skillsChecked);
  }

  getShortName(skill: Skill): string {
    return skill.name.substring(0, 4).toUpperCase();
  }

}
