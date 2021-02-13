import { SkillValueObject } from './skill-value-object.interface';

export class Player {
  id: number;
  name: string;
  mainPosition: number;
  positions: number[];
  specialAbilities?: number[];
  reflexes: SkillValueObject;
  agility: SkillValueObject;
  anticipation: SkillValueObject;
  rushingOut: SkillValueObject;
  communication: SkillValueObject;
  throwing: SkillValueObject;
  kicking: SkillValueObject;
  punching: SkillValueObject;
  aerialReach: SkillValueObject;
  concentration: SkillValueObject;
  tackling: SkillValueObject;
  marking: SkillValueObject;
  positioning: SkillValueObject;
  heading: SkillValueObject;
  bravery: SkillValueObject;
  passing: SkillValueObject;
  dribbling: SkillValueObject;
  crossing: SkillValueObject;
  shooting: SkillValueObject;
  finishing: SkillValueObject;
  fitnesse: SkillValueObject;
  strength: SkillValueObject;
  aggression: SkillValueObject;
  speed: SkillValueObject;
  creativity: SkillValueObject;
  user: string;
  age: number;

  constructor(
    id: number,
    name: string,
    mainPosition: number,
    positions: number[],
    user: string,
    reflexes: SkillValueObject,
    agility: SkillValueObject,
    anticipation: SkillValueObject,
    rushingOut: SkillValueObject,
    communication: SkillValueObject,
    throwing: SkillValueObject,
    kicking: SkillValueObject,
    punching: SkillValueObject,
    aerialReach: SkillValueObject,
    concentration: SkillValueObject,
    tackling: SkillValueObject,
    marking: SkillValueObject,
    positioning: SkillValueObject,
    heading: SkillValueObject,
    bravery: SkillValueObject,
    passing: SkillValueObject,
    dribbling: SkillValueObject,
    crossing: SkillValueObject,
    shooting: SkillValueObject,
    finishing: SkillValueObject,
    fitnesse: SkillValueObject,
    strength: SkillValueObject,
    aggression: SkillValueObject,
    speed: SkillValueObject,
    creativity: SkillValueObject,
    age: number
  ) {
    this.id = id;
    this.name = name;
    this.mainPosition = mainPosition;
    this.positions = positions;
    this.user = user;
    this.reflexes = reflexes;
    this.agility = agility;
    this.anticipation = anticipation;
    this.rushingOut = rushingOut;
    this.communication = communication;
    this.throwing = throwing;
    this.kicking = kicking;
    this.punching = punching;
    this.aerialReach = aerialReach;
    this.concentration = concentration;
    this.tackling = tackling;
    this.marking = marking;
    this.positioning = positioning;
    this.heading = heading;
    this.bravery = bravery;
    this.passing = passing;
    this.dribbling = dribbling;
    this.crossing = crossing;
    this.shooting = shooting;
    this.finishing = finishing;
    this.fitnesse = fitnesse;
    this.strength = strength;
    this.aggression = aggression;
    this.speed = speed;
    this.creativity = creativity;
    this.age = age;
  }

  isGoalkeeper(): boolean {
    return this.mainPosition === 1;
  }

  getTopElevenValue(): number {
    const sum = this.getSkillsValues().reduce((s, value) => s + +value, 0);
    return Math.floor(sum / 15);
  }

  getWhiteSkillValue(): number {
    const sum = this.getWhiteSkillValues().reduce((s, value) => s + +value, 0);
    return Math.floor(sum / this.getWhiteSkillValues().length);
  }

  getMainPositionWhiteSkillValue(): number {
    const sum = this.getMainPositionWhiteSkillValues().reduce((s, value) => s + +value, 0);
    return Math.floor(sum / this.getMainPositionWhiteSkillValues().length);
  }

  getGoalkeeperSkills(): SkillValueObject[] {
    return [
      this.reflexes,
      this.agility,
      this.anticipation,
      this.rushingOut,
      this.communication,
      this.throwing,
      this.kicking,
      this.punching,
      this.aerialReach,
      this.concentration
    ];
  }

  getFieldPlayerSkills(): SkillValueObject[] {
    return [
      this.tackling,
      this.marking,
      this.positioning,
      this.heading,
      this.bravery,
      this.passing,
      this.dribbling,
      this.crossing,
      this.shooting,
      this.finishing
    ];
  }

  getFitnesseSkills(): SkillValueObject[] {
    return [
      this.fitnesse,
      this.strength,
      this.aggression,
      this.speed,
      this.creativity
    ];
  }

  private getSkillsValues(): number[] {
    let values: number[] = [
      ...this.getFitnesseSkills().map(s => s.value)
    ];

    if (this.isGoalkeeper()) {
      values = [
        ...values,
        ...this.getGoalkeeperSkills().map(s => s.value)
      ];
    } else {
      values = [
        ...values,
        ...this.getFieldPlayerSkills().map(s => s.value)
      ];
    }

    return values;
  }

  private getWhiteSkillValues(): number [] {
    let values = [
      ...this.getFitnesseSkills().filter(s => s.isWhiteSkill).map(s => s.value)
    ];

    if (this.isGoalkeeper()) {
      values = [
        ...values,
        ...this.getGoalkeeperSkills().filter(s => s.isWhiteSkill).map(s => s.value)
      ];
    } else {
      values = [
        ...values,
        ...this.getFieldPlayerSkills().filter(s => s.isWhiteSkill).map(s => s.value)
      ];
    }

    return values;
  }

  private getMainPositionWhiteSkillValues(): number [] {
    let values = [
      ...this.getFitnesseSkills().filter(s => s.isMainPositionWhiteSkill).map(s => s.value)
    ];

    if (this.isGoalkeeper()) {
      values = [
        ...values,
        ...this.getGoalkeeperSkills().filter(s => s.isMainPositionWhiteSkill).map(s => s.value)
      ];
    } else {
      values = [
        ...values,
        ...this.getFieldPlayerSkills().filter(s => s.isMainPositionWhiteSkill).map(s => s.value)
      ];
    }

    return values;
  }

}
