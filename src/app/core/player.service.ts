
import { Injectable } from '@angular/core';
import { PlayerRaw } from '../shared/models/player-raw.interface';
import { Player } from '../shared/models/player.class';
import { Position } from '../shared/models/position.interface';
import { SkillValueObject } from '../shared/models/skill-value-object.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  mapRawPlayersToPlayers(
    rawPlayers: PlayerRaw[],
    userId: string,
    allPositions: Position[]
  ): Player[] {
    return rawPlayers.map(
      player => {
        const positions = player.positions ? player.positions.split(',').map(e => +e) : [];

        return new Player(
          +player.id,
          player.name,
          +player.mainPosition,
          positions,
          userId,
          this.mapRawSkillToSkillValueObject(
            'reflexes',
            +player.reflexes,
            positions,
            +player.mainPosition,
            allPositions,
            1
          ),
          this.mapRawSkillToSkillValueObject(
            'agility',
            +player.agility,
            positions,
            +player.mainPosition,
            allPositions,
            2
          ),
          this.mapRawSkillToSkillValueObject(
            'anticipation',
            +player.anticipation,
            positions,
            +player.mainPosition,
            allPositions,
            3
          ),
          this.mapRawSkillToSkillValueObject(
            'rushingOut',
            +player.rushingOut,
            positions,
            +player.mainPosition,
            allPositions,
            4
          ),
          this.mapRawSkillToSkillValueObject(
            'communication',
            +player.communication,
            positions,
            +player.mainPosition,
            allPositions,
            5
          ),
          this.mapRawSkillToSkillValueObject(
            'throwing',
            +player.throwing,
            positions,
            +player.mainPosition,
            allPositions,
            6
          ),
          this.mapRawSkillToSkillValueObject(
            'kicking',
            +player.kicking,
            positions,
            +player.mainPosition,
            allPositions,
            7
          ),
          this.mapRawSkillToSkillValueObject(
            'punching',
            +player.punching,
            positions,
            +player.mainPosition,
            allPositions,
            8
          ),
          this.mapRawSkillToSkillValueObject(
            'aerialReach',
            +player.aerialReach,
            positions,
            +player.mainPosition,
            allPositions,
            9
          ),
          this.mapRawSkillToSkillValueObject(
            'concentration',
            +player.concentration,
            positions,
            +player.mainPosition,
            allPositions,
            10
          ),
          this.mapRawSkillToSkillValueObject(
            'tackling',
            +player.tackling,
            positions,
            +player.mainPosition,
            allPositions,
            11
          ),
          this.mapRawSkillToSkillValueObject(
            'marking',
            +player.marking,
            positions,
            +player.mainPosition,
            allPositions,
            12
          ),
          this.mapRawSkillToSkillValueObject(
            'positioning',
            +player.positioning,
            positions,
            +player.mainPosition,
            allPositions,
            13
          ),
          this.mapRawSkillToSkillValueObject(
            'heading',
            +player.heading,
            positions,
            +player.mainPosition,
            allPositions,
            14
          ),
          this.mapRawSkillToSkillValueObject(
            'bravery',
            +player.bravery,
            positions,
            +player.mainPosition,
            allPositions,
            15
          ),
          this.mapRawSkillToSkillValueObject(
            'passing',
            +player.passing,
            positions,
            +player.mainPosition,
            allPositions,
            16
          ),
          this.mapRawSkillToSkillValueObject(
            'dribbling',
            +player.dribbling,
            positions,
            +player.mainPosition,
            allPositions,
            17
          ),
          this.mapRawSkillToSkillValueObject(
            'crossing',
            +player.crossing,
            positions,
            +player.mainPosition,
            allPositions,
            18
          ),
          this.mapRawSkillToSkillValueObject(
            'shooting',
            +player.shooting,
            positions,
            +player.mainPosition,
            allPositions,
            19
          ),
          this.mapRawSkillToSkillValueObject(
            'finishing',
            +player.finishing,
            positions,
            +player.mainPosition,
            allPositions,
            20
          ),
          this.mapRawSkillToSkillValueObject(
            'fitnesse',
            +player.fitnesse,
            positions,
            +player.mainPosition,
            allPositions,
            21
          ),
          this.mapRawSkillToSkillValueObject(
            'strength',
            +player.strength,
            positions,
            +player.mainPosition,
            allPositions,
            22
          ),
          this.mapRawSkillToSkillValueObject(
            'aggression',
            +player.aggression,
            positions,
            +player.mainPosition,
            allPositions,
            23
          ),
          this.mapRawSkillToSkillValueObject(
            'speed',
            +player.speed,
            positions,
            +player.mainPosition,
            allPositions,
            24
          ),
          this.mapRawSkillToSkillValueObject(
            'creativity',
            +player.creativity,
            positions,
            +player.mainPosition,
            allPositions,
            25
          ),
          +player.age
        );
      }
    );
  }

  isWhiteSkill(positions: number[], allPositions: Position[], skillId: number): boolean {
    if (!positions) {
      return false;
    }

    const filteredPositions = allPositions.filter(p => positions.includes(p.id));

    let isWhiteSkill = false;

    filteredPositions.forEach(pos => {
      if (pos.whiteSkills.includes(skillId)) {
        isWhiteSkill = true;
      }
    });

    return isWhiteSkill;
  }

  mapRawSkillToSkillValueObject(
    name: string,
    value: number,
    playerPositions: number[],
    mainPosition: number,
    allPositions: Position[],
    skillId: number
  ): SkillValueObject {
    return {
      name,
      value,
      isWhiteSkill: this.isWhiteSkill(playerPositions, allPositions, skillId),
      isMainPositionWhiteSkill: this.isWhiteSkill([mainPosition], allPositions, skillId)
    };
  }

  getEmptyPlayer(userId: string): Player {
    return new Player(
      -1,
      '',
      -1,
      [],
      userId,
      this.getEmptySkillValueObject('reflexes'),
      this.getEmptySkillValueObject('agility'),
      this.getEmptySkillValueObject('anticipation'),
      this.getEmptySkillValueObject('rushingOut'),
      this.getEmptySkillValueObject('communication'),
      this.getEmptySkillValueObject('throwing'),
      this.getEmptySkillValueObject('kicking'),
      this.getEmptySkillValueObject('punching'),
      this.getEmptySkillValueObject('aerialReach'),
      this.getEmptySkillValueObject('concentration'),
      this.getEmptySkillValueObject('tackling'),
      this.getEmptySkillValueObject('marking'),
      this.getEmptySkillValueObject('positioning'),
      this.getEmptySkillValueObject('heading'),
      this.getEmptySkillValueObject('bravery'),
      this.getEmptySkillValueObject('passing'),
      this.getEmptySkillValueObject('dribbling'),
      this.getEmptySkillValueObject('crossing'),
      this.getEmptySkillValueObject('shooting'),
      this.getEmptySkillValueObject('finishing'),
      this.getEmptySkillValueObject('fitnesse'),
      this.getEmptySkillValueObject('strength'),
      this.getEmptySkillValueObject('aggression'),
      this.getEmptySkillValueObject('speed'),
      this.getEmptySkillValueObject('creativity'),
      18
    );
  }

  getEmptySkillValueObject(name: string): SkillValueObject {
    return {
      name,
      value: 0,
      isWhiteSkill: false,
      isMainPositionWhiteSkill: false
    };
  }

}
