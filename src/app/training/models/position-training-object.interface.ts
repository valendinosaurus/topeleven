import { Position } from 'src/app/shared/models/position.interface';
import { Skill } from 'src/app/shared/models/skill.interface';
import { TrainingSession } from 'src/app/shared/models/training-session.interface';

export interface PositionTrainingObject {
  positions: Position[];
  efficiencyPerTrainingSession: TrainingEffectiveness[];
}

export interface TrainingEffectiveness extends TrainingSession {
  affectedWhiteSkills: Skill[];
  efficiency: number;
}
