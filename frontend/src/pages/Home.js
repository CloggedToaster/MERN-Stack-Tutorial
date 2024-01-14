import { useEffect } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext";

//components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';


const Home = () => {
    /* create local states and set inital state to null */
    // const [workouts, setWorkouts] = useState(null)
    // **no longer needed with use of contexts/hooks

    const {workouts, dispatch} = useWorkoutContext()

    useEffect(() => {
        const fetchWorkouts = async() => {
            /* store the data from the express API to parse into json */
            /* a proxy was set in package.json: "proxy": "http://localhost:4000" */
            const response = await fetch('/api/workouts')
            const json = await response.json()
            //check if the data was properly parsed
            if(response.ok){
                // setWorkouts(json)
                // with contexts/hooks, no longer need to set local state
                dispatch({type: 'SET_WORKOUT', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {/* only if there's a value for workouts, start mapping the values in workouts */}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

/* default export */
export default Home