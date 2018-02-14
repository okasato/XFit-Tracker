// const Workouts = require('../../db/schema/Workouts');
const Workouts = require('../../schema/Workouts');

module.exports = (req, res) => {
  const squat = ['front squat', 'back squat', 'overhead squat'];
  const deadlift = ['sumo deadlift high pull', 'romanian deadlift'];
  const press = ['shoulder press', 'benchpress', 'push press'];
  const clean = ['power clean', 'squat clean', 'medicine ball clean', 'clean & jerk'];
  const jerk = ['push jerk', 'split jerk'];
  const snatch = ['power snatch', 'squat snatch'];
  const pullups = ['pull ups', 'toes to bar (T2B)', 'knees to elbows (K2E)', 'chest to bar (C2B)', 'muscle ups (MU)', 'kipping'];
  const pushups = ['push ups', 'handstand pushup'];
  const others = ['run', 'bike', 'row', 'kettlebell swing', 'box jump', 'burpee', 'lateral burpee', 'ghd situp', 'hip extension', 'l-sit', 'thruster', 'pistol', 'ring dip', 'wall ball', 'double under (DU)'];

  const seedWorkouts = new Workouts({
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
  });
  seedWorkouts.save(err => {
    if (err) throw err;
    return res.send('Database seeded!');    
  });
  // seedWorkouts.save()
  //   .catch(err => {
  //     console.log('Error happens!!');
  //     if (err) throw err
  //   })
  // res.send('Database seeded!');
};