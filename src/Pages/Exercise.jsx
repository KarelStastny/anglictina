import React, { useEffect, useState } from "react";
import ExerciseENfromCZ from "../components/ExerciseENfromCZ";
import ExerciseCZfromEN from "../components/ExerciseCZfromEN";
import { UseEnglish } from "../context/EnglishContext";

const Exercise = () => {
  const {filtredSystem, setFiltredSystem, loggedUser} = UseEnglish()
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
          <section>
            <h1>Úrovně</h1>
            <div>
          <input
            type="checkbox"
            checked={levels["A1"]}
            onChange={() => handleCheckboxChange("A1")}
          />
          <label>A1</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={levels["A2"]}
            onChange={() => handleCheckboxChange("A2")}
          />
          <label>A2</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={levels["B1"]}
            onChange={() => handleCheckboxChange("B1")}
          />
          <label>B1</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={levels["B2"]}
            onChange={() => handleCheckboxChange("B2")}
          />
          <label>B2</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={levels["C1"]}
            onChange={() => handleCheckboxChange("C1")}
          />
          <label>C1</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={levels["C2"]}
            onChange={() => handleCheckboxChange("C2")}
          />
          <label>C2</label>
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
