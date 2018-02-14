const seeder = require('mongoose-seed');

const squat = ['front squat', 'back squat', 'overhead squat'];
const deadlift = ['sumo deadlift high pull', 'romanian deadlift'];
const press = ['shoulder press', 'benchpress', 'push press'];
const clean = ['power clean', 'squat clean', 'medicine ball clean', 'clean & jerk'];
const jerk = ['push jerk', 'split jerk'];
const snatch = ['power snatch', 'squat snatch'];
const pullups = ['pull ups', 'toes to bar (T2B)', 'knees to elbows (K2E)', 'chest to bar (C2B)', 'muscle ups (MU)', 'kipping'];
const pushups = ['push ups', 'handstand pushup'];
const others = ['run', 'bike', 'row', 'kettlebell swing', 'box jump', 'burpee', 'lateral burpee', 'ghd situp', 'hip extension', 'l-sit', 'thruster', 'pistol', 'ring dip', 'wall ball', 'double under (DU)'];

const data = [
  {
    'model': 'Workouts',
    'documents': [
      {
        exercise: {
          squat,
          deadlift,
          press,
          clean,
          jerk,
          snatch,
          pullups,
          pushups,
          others
        }
      }
    ]
  }
];

const user = 'user1';
const password = 'xfittracker';
const db = 'xfittracker';
seeder.connect(`mongodb://${user}:${password}@localhost:27017/${db}?authMechanism=SCRAM-SHA-1`, () => {
  seeder.loadModels(['./schema/Workouts.js']);
  seeder.clearModels(['Workouts'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });  
});
