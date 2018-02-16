'use strict';

const router = require('express').Router();
const getWorkoutsController = require('../../controller/getWorkouts');

router.get('/workouts', getWorkoutsController);

module.exports =　router;