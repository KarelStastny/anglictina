import React, { useState } from "react";
import ExerciseENfromCZ from "../components/ExerciseENfromCZ";
import ExerciseCZfromEN from "../components/ExerciseCZfromEN";
import SummaryProgress from "../components/SummaryProgress";

const Exercise = () => {
  const [typeExercise, setTypeExercise] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Pokud je vybran typ procvičování zobrazí se */}
      {!typeExercise && (
        <>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Vyberte typ cvičení</h1>
            <p className="mt-2">
              Zvolte si směr překladu a začněte s procvičováním vaší angličtiny
              nebo češtiny.
            </p>
          </div>

          <div className="space-x-4 mb-8">
            <button
              onClick={() => setTypeExercise("CZ-EN")}
              className="py-2 px-6 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
            >
              Z češtiny do angličtiny
            </button>
            <button
              onClick={() => setTypeExercise("EN-CZ")}
              className="py-2 px-6 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition duration-300"
            >
              Z angličtiny do češtiny
            </button>
          </div>
        </>
      )}
      {typeExercise === "CZ-EN" && <ExerciseCZfromEN />}
      {typeExercise === "EN-CZ" && <ExerciseENfromCZ />}
      {/* {typeExercise && <SummaryProgress />}{" "} */}
      {/* Přidáno pro zobrazení pokroku */}
    </div>
  );
};

export default Exercise;
