import React, { useState, useEffect } from "react";
import { vocabulary } from "../data/vocabulary";
import { UseEnglish } from "../context/EnglishContext";
import { user } from "../data/user";

import SummaryProgress from "./SummaryProgress";

const ExerciseENfromCZ = () => {
    const{loggedUser, setLoggedUser, rightAnswerProgress, wrongAnswerProgress} = UseEnglish()

    // console.log(loggedUser);

  const [start, setStart] = useState(true);
  const [wordCZ, setWordCZ] = useState("");
  const [wordEN, setWordEN] = useState("");
  const [accent, setAccent] = useState("");
  const [answer, setAnswer] = useState("");
  const [correctly, setCorrectly] = useState(null);
  const [secondCorrectly, setSecondCorretly] = useState(null);
  const [rightAnswer, setRightAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [isFomrSend, setIsFormSend] = useState(false);
  const [actualyVocabulary, setActulyVocabulary] = useState([]);
  const [idVocabulary, setIdVocabulary] = useState("")
  const [idLoggedUser, setIdLoggedUser] = useState(loggedUser.id)
  const [eliminatedVocabulary, setEliminatedVocabulary] = useState("")



  //system for random word
  const generatorRandomNumber = () => {
    // Filtrování slovíček, která nebyla vyřazena
    const filteredVocabulary = vocabulary.filter(item => item.eliminated === false);

    // console.log(filteredVocabulary);
  
    if (filteredVocabulary.length === 0) {
      console.log("Všechna slovíčka byla vyřazena.");
      return; // nebo můžete zde nastavit nějaké chování, když nejsou žádná slovíčka k procvičení
    }
  
    // Výběr náhodného indexu ze zbylých slovíček
    const randomIndex = Math.floor(Math.random() * filteredVocabulary.length);
  
    // Nastavení aktuálního slovíčka pomocí náhodného indexu
    const selectedVocabulary = filteredVocabulary[randomIndex];
    setActulyVocabulary(selectedVocabulary);
    setWordCZ(selectedVocabulary.czechWord);
    setWordEN(selectedVocabulary.englishWord);
    setAccent(selectedVocabulary.accent);
    setIdVocabulary(selectedVocabulary.id);
    setEliminatedVocabulary(selectedVocabulary.eliminated);
  
    // Vynulování předchozích odpovědí
    setAnswer("");
    setIsFormSend(false);
    setRightAnswer("");
    setWrongAnswer("");
  };
  
//   console.log(actualyVocabulary.englishOption);

  // System for check correct answer
  const submitForm = (e) => {
    e.preventDefault();

    // answer comparison
    try {
      if (wordEN === answer) {
        setCorrectly(true);
        setRightAnswer(`Tvá odpověď je správná. [${accent}]`);
        rightAnswerProgress(actualyVocabulary)
        

        
        

      } else if (actualyVocabulary.englishOption.includes(answer)) {
        setCorrectly(false);
        setRightAnswer(`Skoro správně, přesná odpověd je ${wordEN}. [${accent}]`);
        setSecondCorretly(true);
        rightAnswerProgress(actualyVocabulary)
      } else {
        setCorrectly(false);
        setWrongAnswer(`Chyba, správná odpověď je: ${wordEN} [${accent}]`);
        wrongAnswerProgress(actualyVocabulary)
      }
    } catch (error) {
      console.error(error);
    }
    setIsFormSend(true);
  };

  useEffect(() => {
    // console.log(loggedUser);
    // console.log(idVocabulary);
    // console.log(idLoggedUser);

  }, [wordCZ])

  const eliminatedThisVocabulary = () => {
    // Nalezení uživatele
    const foundUser = user.find(one => one.id === idLoggedUser);
  
    // Pokud je uživatel nalezen, najde se slovíčko a přepíše změní se hodnota na vyřazené slovíčko
    if (foundUser) {
     const foundVocabulary =  foundUser.studyVocabulary.find(one => one.id === idVocabulary)

     foundVocabulary.eliminated = true

     
    }
    console.log(foundUser);
  }
  


      
  
  return (
    <div className="w-full p-4 bg-gray-100 flex flex-col justify-center items-center h-screen">
      <SummaryProgress/>
      <div className="min-w-[800px] h-[500px] bg-white shadow-lg border border-gray-200 m-auto p-6 flex items-center justify-center flex-col rounded-lg">
        {start ? (
          <button
            className="text-xl bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
            onClick={() => {
              setStart(false);
              generatorRandomNumber();
            }}
          >
            Chcete začít
          </button>
        ) : (
          <>
            <div className="mb-10 text-lg font-semibold">
              <div
                className={
                  correctly
                    ? "text-green-600"
                    : secondCorrectly
                    ? "text-yellow-600"
                    : "text-red-600"
                }
              >
                {correctly
                  ? rightAnswer
                  : secondCorrectly
                  ? rightAnswer
                  : wrongAnswer}
              </div>
            </div>
  
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={submitForm}
            >
              <section className="flex gap-8 items-center justify-center">
                <div className="text-gray-800 font-medium">{wordCZ}</div>
                <input
                  className="border-b-2 border-gray-400 focus:border-blue-500 bg-transparent outline-none pl-2 text-lg"
                  type="text"
                  value={answer}
                  placeholder="Napište anglické slovo"
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </section>
  
              {isFomrSend ? (
                <div> <button type="button" onClick={() => eliminatedThisVocabulary()}>Vřadit z opakování</button>
                <button
                  className="mt-10 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
                  onClick={generatorRandomNumber}
                >
                  Další slovíčko
                </button></div>
               
              ) : (
                <input
                  className="mt-10 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                  type="submit"
                  value="Odeslat"
                />
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
  
};

export default ExerciseENfromCZ;
