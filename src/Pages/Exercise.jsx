import React, { useEffect, useState } from "react";
import ExerciseENfromCZ from "../components/ExerciseENfromCZ";
import ExerciseCZfromEN from "../components/ExerciseCZfromEN";
import { UseEnglish } from "../context/EnglishContext";

const Exercise = () => {
  const {setFiltredSystem, loggedUser} = UseEnglish()
  const [typeExercise, setTypeExercise] = useState("");
  const [levels, setLevels] = useState({
    A1: true,
    A2: true,
    B1: true,
    B2: true,
    C1: true,
    C2: true,
  })


  // zaškrtává políčka a natavuje u nich opačnou hodnotu
  const handleCheckboxChange = (level) => {
    setLevels({ ...levels, [level]: !levels[level] });
  };

  // Filtrování
  useEffect(() => {
    // Vyfiltrování slovíček, které uživatel nechce procvičovat a které odpovídají vybraným úrovním obtížnosti
    const filteredVocabulary = loggedUser.studyVocabulary.filter((word) => {
      const isNotEliminated = !word.eliminated;
      const isLevelSelected = levels[word.hard];
      return isNotEliminated && isLevelSelected;
    });
  
    setFiltredSystem(filteredVocabulary);
  
  }, [levels, loggedUser.studyVocabulary]); 
  
  


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

          {/* Úrovně */}
          <section className="p-4">
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {["A1", "A2", "B1", "B2", "C1", "C2"].map(level => (
      <div key={level} className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={levels[level]}
          onChange={() => handleCheckboxChange(level)}
          className="accent-blue-600"
        />
        <label className="text-lg text-gray-700">{level}</label>
      </div>
    ))}
  </div>
</section>




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
    
    </div>
  );
};

export default Exercise;
