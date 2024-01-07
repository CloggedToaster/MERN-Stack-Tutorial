const { error } = require('console');
const Workout = require('../models/workoutModel.js');
const mongoose = require('mongoose')


//# get all workouts #
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}

//# get a single workout #
const getWorkout = async (req, res) => {
    //get the ID
    const {id} = req.params;
    //confirm that the ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID is not valid!"});
    }

    //search for the object by ID
    const workout = await Workout.findById(id);

    //confirm that it exists
    if(!workout){
        res.status(404).json({error: "No such workout!"});
    } else {
        res.status(200).json(workout);
    }
    
}

//# create a workout #
const createWorkout = async (req, res) => {
    const {title, reps, weight} = req.body;
    try {
        const workout = await Workout.create({ title, reps, weight });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message  });
    }
}


//# delete a workout #
const deleteWorkout = async (req, res) => {
    //get the ID
    const {id} = req.params;
    //confirm that the ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID is not valid!"});
    }
    
    const workout = await Workout.findOneAndDelete({_id: id})

    //confirm that it exists
    if(!workout){
        res.status(404).json({error: "No such workout to delete!"});
    } else {
        res.status(200).json(workout);
    }
}


//# update a workout #
const updateWorkout = async (req, res) => {
    //get the ID
    const {id} = req.params;
    //confirm that the ID is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "ID is not valid!"});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    //confirm that it exists
    if(!workout){
        res.status(404).json({error: "No such workout to update!"});
    } else {
        res.status(200).json(workout);
    }
}


module.exports = {
    createWorkout,
    getWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout
}