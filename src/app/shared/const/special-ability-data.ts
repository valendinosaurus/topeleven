import { SpecialAbility } from '../models/special-ability.interface';

export const specialAbilites: SpecialAbility[] = [
  {
    id: 1,
    name: 'Penalty Killer',
    rating: 1,
    counters: [
      9
    ],
    possiblePositions: [
      1
    ],
    imageUrl: 'sa-penalty-killer.png',
    affects: 1
  },
  {
    id: 2,
    name: 'One on One Stopper',
    rating: 2,
    counters: [
      10
    ],
    possiblePositions: [
      1
    ],
    imageUrl: 'sa-one-one-stopper.png',
    affects: 1
  },
  {
    id: 3,
    name: 'Aerial Defender',
    rating: 5,
    counters: [
      8
    ],
    possiblePositions: [
      2,
      3,
      4,
      5
    ],
    imageUrl: 'sa-aerial-defender.png',
    affects: 14
  },
  {
    id: 4,
    name: 'Defensive Wall',
    rating: 4,
    counters: [
      9,
      7
    ],
    possiblePositions: [
      2,
      3,
      4,
      5
    ],
    imageUrl: 'sa-defensive-wall.png',
    affects: 13
  },
  {
    id: 5,
    name: 'Dribbler',
    rating: 0,
    possiblePositions: [
      2,
      4,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    imageUrl: 'sa-dribbler.png',
    affects: 17
  },
  {
    id: 6,
    name: 'Playmaker',
    rating: 1,
    possiblePositions: [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11],
    imageUrl: 'sa-playmaker.png',
    affects: 16
  },
  {
    id: 7,
    name: 'Shadow Striker',
    rating: 3,
    possiblePositions: [
      6,
      7,
      8,
      9,
      10,
      11
    ],
    imageUrl: 'sa-shadow-striker.png',
    affects: 19
  },
  {
    id: 8,
    name: 'Corner Specialist',
    rating: 5,
    possiblePositions: [
      2,
      4,
      6,
      8,
      9,
      11
    ],
    imageUrl: 'sa-corner.png',
    affects: 18
  },
  {
    id: 9,
    name: 'Free Kick Specialist',
    rating: 0,
    possiblePositions: [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    imageUrl: 'sa-free-kick.png',
    affects: 19
  },
  {
    id: 10,
    name: 'Penalty Kick Specialist',
    rating: 0,
    possiblePositions: [
      9,
      10,
      11,
      12
    ],
    imageUrl: 'sa-penalty-specialist.png',
    affects: 20
  },
  {
    id: 11,
    name: 'One on One Scorer',
    rating: 4,
    possiblePositions: [
      9,
      10,
      11,
      12
    ],
    imageUrl: 'sa-one-one-scorer.png',
    affects: 20
  },
];
