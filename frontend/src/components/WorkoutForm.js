import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();

    const [title, setTitle] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    // function to handle submitting the form
    const handleSubmit = async (event) => {
        //stops webpage from reloading
        event.preventDefault();

        const workout = {title, weight, reps};

        //sends out a resquest to <URL>
        //object w/options eg: POST, GET, PATCH, DELETE, etc.
        const response = await fetch('api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const json = await response.json()

        if(!response.ok){
            //if there was an error set the error to the json error
            setError(json.error);
            setEmptyFields(json.emptyFields);
            console.log(json.emptyFields);
        }
        if(response.ok){
            //reset all the input fields
            setTitle('');
            setWeight('');
            setReps('');
            //if there is no error; ensure that error is null
            setError(null);
            setEmptyFields([]);
            console.log('new workout added!', json);
            //call local state 
            dispatch({type:"CREATE_WORKOUT", payload: json});
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
        
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                //if title is in the empty fields, set the class to be 'error' so that the CSS would show as an error
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Weight:</label>
            <input
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                //if weight is in the empty fields, set the class to be 'error' so that the CSS would show as an error
                className={emptyFields.includes('weight') ? 'error' : ''}
            />
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                //if reps is in the empty fields, set the class to be 'error' so that the CSS would show as an error
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;