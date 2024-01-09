import { useEffect, useState } from "react"

//components
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
    {/* create local states and set inital state to null */}
    const [workouts, setWorkouts] = useState(null)
    
    useEffect(() => {
        const fetchWorkouts = async() => {
            {/* store the data from the express API to parse into json */}
            {/* a proxy was set in package.json: "proxy": "http://localhost:4000" */}
            const response = await fetch('/api/workouts')
            const json = await response.json()
            //check if the data was properly parsed
            if(response.ok){
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {/* only if there's a value for workouts, start mapping the values in workouts */}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

{/* default export */}
export default Home