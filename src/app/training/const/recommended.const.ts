import { DrillSequence } from '../models/drill-sequence.interface';

export const recommendedDrillSequences: DrillSequence[] = [
  {
    positions: [ 1 ],
    positionNames: ['GK'],
    isPowerTraining: false,
    trainingSessions: [
      'Goalkeeper training',
      '1on1 finishing',
      '1on1 finishing',
      'shooting technique',
      'hold the line',
      'long run',
    ]
  },
  {
    positions: [ 2, 4 ],
    positionNames: ['DR', 'DL'],
    isPowerTraining: false,
    trainingSessions: [
      'press the play',
      'press the play',
      'long run',
      'long run',
      'defending crosses',
      'defending crosses',
    ]
  },
  {
    positions: [ 3 ],
    positionNames: ['DC'],
    isPowerTraining: false,
    trainingSessions: [
      'warm-up',
      'warum-up',
      'press the play',
      'press the play',
      'hold the line',
      'gym'
    ]
  },
  {
    positions: [ 5 ],
    positionNames: ['DMC'],
    isPowerTraining: false,
    trainingSessions: [
      'warm-up',
      'piggy in the middle',
      'piggy in the middle',
      'use your head',
      'hold the line',
      'gym',
    ]
  },
  {
    positions: [ 6, 8 ],
    positionNames: ['MR', 'ML'],
    isPowerTraining: false,
    trainingSessions: [
      'sprint',
      'slalom dribble',
      'fast counter attacks',
      'pass go and shoot',
      'long run',
      'long run',
    ]
  },
  {
    positions: [ 7 ],
    positionNames: ['MC'],
    isPowerTraining: false,
    trainingSessions: [
      'pass go and shoot',
      'slalom dribble',
      'slalom dribble',
      'sprint',
      'hold the line',
      'video analysis',
    ]
  },
  {
    positions: [ 9, 11 ],
    positionNames: ['AMR', 'AML'],
    isPowerTraining: false,
    trainingSessions: [
      'sprint',
      'slalom dribble',
      'fast counter attacks',
      'pass go and shoot',
      'pass go and shoot',
      'long run',
    ]
  },
  {
    positions: [ 10 ],
    positionNames: ['AMC'],
    isPowerTraining: false,
    trainingSessions: [
      'pass go and shoot',
      'slalom dribble',
      'slalom dribble',
      'skill drill',
      'skill drill',
      'sprint',
    ]
  },
  {
    positions: [ 12 ],
    positionNames: ['ST'],
    isPowerTraining: false,
    trainingSessions: [
      'shooting technique',
      'shooting technique',
      'skill drill',
      'use your head',
      'use your head',
      'pass go and shoot',
    ]
  }
];

export const recommendedPowerDrillSequences: DrillSequence[] = [
  {
    positions: [ 1 ],
    positionNames: ['GK'],
    isPowerTraining: true,
    trainingSessions: [
      'defending crosses',
      '1on1 finishing',
      'hold the line',
      'wing play',
      'gk training',
      'gym',
    ]
  },
  {
    positions: [ 2, 4 ],
    positionNames: ['DR', 'DL'],
    isPowerTraining: true,
    trainingSessions: [
      'Carioca with ladders',
      'press play',
      'piggy in middle',
      'video analysis',
      'use your head',
      'stop the attacker',
      'shuttle runs',
      'defending crosses',
      'set piece delivery',
      '1on1 finishing',
      'gym',
      'slalom dribble',
    ]
  },
  {
    positions: [ 3 ],
    positionNames: ['DC'],
    isPowerTraining: true,
    trainingSessions: [
      'warm up',
      'press the play',
      'video analysis',
      'stop the attacker',
      'use your head',
      'Carioca with ladders (if aggression isnt 340%)',
      'shuttle runs (if bravery isnt 340%)',
      'gym',
    ]
  },
  {
    positions: [ 5 ],
    positionNames: ['DMC'],
    isPowerTraining: true,
    trainingSessions: [
      'warm up',
      'press the play',
      'video analysis',
      'stop the attacker',
      'use your head',
      'Carioca with ladders (if aggression isnt 340%)',
      'shuttle runs (if bravery isnt 340%)',
      'gym',
    ]
  },
  {
    positions: [ 6, 8 ],
    positionNames: ['MR', 'ML'],
    isPowerTraining: true,
    trainingSessions: [
      'pass go shoot',
      'skill drill',
      'fast counter attacks',
      'wing play',
      'long run',
      'video analysis',
      'piggy in middle',
      'set piece delivery',
      '2xgym /4x hold the line',
    ]
  },
  {
    positions: [ 7 ],
    positionNames: ['MC'],
    isPowerTraining: true,
    trainingSessions: [
      '"coming soon"',
    ]
  },
  {
    positions: [ 9, 11 ],
    positionNames: ['AMR', 'AML'],
    isPowerTraining: true,
    trainingSessions: [
      'pass go shoot',
      'shooting technique',
      'fast counter attacks',
      'wing play',
      'set piece delivery',
      'skill drill',
      'video analysis',
      '1on1 finishing',
      'long run',
      'piggy in middle',
      'gym',
      'warm up',
    ]
  },
  {
    positions: [ 10 ],
    positionNames: ['AMC'],
    isPowerTraining: true,
    trainingSessions: [
      'pass go shoot',
      'shooting technique',
      'wing play (until shooting is 340%)',
      'skill drill',
      'video analysis',
      '1on1 finishing',
      'Carioca with ladders',
      'piggy in middle',
      'set piece',
      'gym',
    ]
  },
  {
    positions: [ 12 ],
    positionNames: ['ST'],
    isPowerTraining: true,
    trainingSessions: [
      'pass go shoot',
      'shooting technique',
      'wing play (until shooting is 340%)',
      'skill drill',
      'video analysis',
      '1on1 finishing',
      'Carioca with ladders',
      'piggy in middle',
      'set piece',
      'gym',
    ]
  }
];
