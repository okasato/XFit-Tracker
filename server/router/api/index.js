'use strict';

const router = require('express').Router();
const getWorkoutsController = require('../../controller/getWorkouts');
const createUsersController = require('../../controller/createUsers');

router.get('/workouts', getWorkoutsController);
router.post('/users', createUsersController);
module.exports =　router;