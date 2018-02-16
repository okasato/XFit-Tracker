'use strict';

const router = require('express').Router();
const getWorkoutsController = require('../../controller/getWorkouts');
const createUsersController = require('../../controller/createUsers');
const getUsersController = require('../../controller/getUsers');

router.get('/workouts', getWorkoutsController);
router.post('/users', createUsersController);
router.get('/users', getUsersController);

module.exports =　router;