'use strict';

const router = require('express').Router();
const seedController = require('../../controller/seed');
const getWorkoutsController = require('../../controller/getWorkouts');

router.get('/seeds', seedController);
router.get('/', getWorkoutsController);

module.exports =　router;