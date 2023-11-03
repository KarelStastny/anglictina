import React, { useState } from 'react'
import ExerciseENfromCZ from '../components/ExerciseENfromCZ'
import ExerciseCZfromEN from '../components/ExerciseCZfromEN'

const Exercise = () => {
    const [typeExercise, setTypeExercise] = useState(""); // Zde byla chyba - mělo by být useState("")
    
    return (
        <div>
            <button onClick={() => setTypeExercise("CZ-EN")}>Z češtiny do angličtiny</button>
            <button onClick={() => setTypeExercise("EN-CZ")}>Z angličtiny do češtiny</button>

            {typeExercise === "CZ-EN" && <ExerciseCZfromEN />}
            {typeExercise === "EN-CZ" && <ExerciseENfromCZ />}
        </div>
    );
}

export default Exercise;
