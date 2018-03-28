const seeder = require('mongoose-seed');

const squat = ['Front squat', 'Back squat', 'Overhead squat'];
const deadlift = ['Sumo deadlift High pull', 'Romanian deadlift'];
const press = ['Shoulder press', 'Benchpress', 'Push press'];
const clean = ['Power clean', 'Squat clean', 'Medicine ball clean', 'Clean & jerk'];
const jerk = ['Push jerk', 'Split jerk'];
const snatch = ['Power snatch', 'Squat snatch'];
const pullups = ['Pull ups', 'Toes to bar (T2B)', 'Knees to elbows (K2E)', 'Chest to bar (C2B)', 'Muscle ups (MU)', 'Kipping'];
const pushups = ['Push ups', 'Handstand pushup'];
const others = ['Run', 'Bike', 'Rowing', 'Kettlebell swing', 'Box jump', 'Burpee', 'Lateral burpee', 'Ghd situp', 'Hip extension', 'L-sit', 'Thruster', 'Pistol', 'Ring dip', 'Wall ball', 'Double under (DU)'];

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
