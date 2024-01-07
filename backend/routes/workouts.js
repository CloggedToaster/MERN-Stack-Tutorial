const express = require('express');
const router = express.Router();
const {
    createWorkout,
    getWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController.js');

//GET all workouts
router.get('/', getAllWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a new workout
router.patch('/:id', updateWorkout)



module.exports = router;
