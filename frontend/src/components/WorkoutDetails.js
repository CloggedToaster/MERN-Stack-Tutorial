import { useWorkoutContext } from "../hooks/useWorkoutContext"

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) =>{
    const {dispatch} = useWorkoutContext()

    const handleClick = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: "DELETE"
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Weight: </strong>{workout.weight}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>

            <span className="material-symbols-outlined delete" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails