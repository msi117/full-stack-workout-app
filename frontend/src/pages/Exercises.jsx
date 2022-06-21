import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getWorkouts, reset} from "../features/workouts/workoutSlice"

function Exercises() {
  const dispatch = useDispatch()

  const {workoutsArray, isLoading, isError, message} = useSelector((state) => state.exercises)
  

  useEffect(() => {

    dispatch(getWorkouts())


    console.log('Workouts array:', workoutsArray)


    return () => {
      console.log('clearing');
      dispatch(reset())
    }


  }, [dispatch, isError, message])


  return (
    <div>
       <h1>{isLoading ? 'Loading' : 'Not Loading'}</h1>
        <h2>
          {workoutsArray.map((workout) => (
            <h2 key={workout.id}>{workout.text}</h2>
          ))}
        </h2>
    </div>
  )
}

export default Exercises