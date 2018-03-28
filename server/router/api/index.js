'use strict';

const router = require('express').Router();
const getWorkoutsController = require('../../controller/getWorkouts');
const createUsersController = require('../../controller/createUsers');
const getUsersController = require('../../controller/getUsers');
const getUserController = require('../../controller/getUser');
const addUserRecordController = require('../../controller/addUserRecord');
const getUserRecordController = require('../../controller/getUserRecord');
// const getUserAllRecordController = require('../../controller/getUserAllRecord');

router.get('/workouts', getWorkoutsController);
router.post('/users', createUsersController);
router.get('/users', getUsersController);
router.get('/users/:username', getUserController);
router.post('/users/:username', addUserRecordController);
router.get('/users/:username/:date', getUserRecordController);
// router.get('/users/:username/allworkouts', getUserAllRecordController);

module.exports =　router;