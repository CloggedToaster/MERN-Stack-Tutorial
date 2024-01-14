import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

export const workoutReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUT':
            return{
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                //filter through current workouts in the current state before making changes (deletion)
                // runs a function for each workout, returns true or false for each run
                // for each individual workout
                // if the current _id matches the _id of the workout to delete
                // delete the workout 
                workouts: state.workouts.filter(individualWorkout => individualWorkout._id !== action.payload._id)
            }
        default:
            return state
    }
}

//property is all the components contained within the <WorkoutContextProvider> tags in index.js; //must be "children" property
export const WorkoutContextProvider = ({ children }) => {
    //calling dispatch function will update the state object; passing an object as an argument with a free-text type 
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}
