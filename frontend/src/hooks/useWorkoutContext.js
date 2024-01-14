import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)
    // if null throw an error
    if(!context){
        throw Error('useWorkoutContext must be used inside a WorkoutContextProvider')
    }
    return context
}


