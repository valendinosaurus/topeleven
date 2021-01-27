import { Position } from 'src/app/shared/models/position.interface';
import { Skill } from 'src/app/shared/models/skill.interface';
import { TrainingSession } from 'src/app/shared/models/training-session.interface';

export interface TrainingSessionSkillObject {
  session: TrainingSession;
  skills: Skill[];
  skillsString: string;
  efficiencyPerPosition: PositionEffectiveness[];
}

export interface PositionEffectiveness extends Position {
  efficiency: number;
  trainedWhiteSkills: Skill[];
}
