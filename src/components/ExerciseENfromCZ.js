import React, { useState } from "react";
import { UseEnglish } from "../context/EnglishContext";
import SummaryProgress from "./SummaryProgress";

const ExerciseENfromCZ = () => {
  const { loggedUser, rightProgress, eliminatedThisVocabulary, WrongProgress, filtredSystem } =
    UseEnglish();

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
  const [idVocabulary, setIdVocabulary] = useState("");
  const [notification, setNotification] = useState("");
  const [noVocabulary, setNoVocabulary] = useState("")
  const idLoggedUser = loggedUser.id

  //system for random word
  const generatorRandomNumber = () => {

      // pokud jsou všechny slovíčka vyřazena
      if (filtredSystem.length === 0) {
        setNoVocabulary("Všechna slovíčka byla vyřazena.");
        return; 
      }

 

    // Výběr náhodného indexu ze zbylých slovíček
    const randomIndex = Math.floor(Math.random() * filtredSystem.length);

    // Nastavení aktuálního slovíčka pomocí náhodného indexu
    const selectedVocabulary = filtredSystem[randomIndex];
    setActulyVocabulary(selectedVocabulary);
    setWordCZ(selectedVocabulary.czechWord);
    setWordEN(selectedVocabulary.englishWord);
    setAccent(selectedVocabulary.accent);
    setIdVocabulary(selectedVocabulary.id);

    // Vynulování předchozích odpovědí
    setAnswer("");
    setIsFormSend(false);
    setRightAnswer("");
    setWrongAnswer("");
    setNotification("");
    setCorrectly(null);
    setSecondCorretly(null);
    setNoVocabulary('')
  };

  //Kontrola odpovědí
  const submitForm = (e) => {
    e.preventDefault();
    const evaluateAndSetState = () => {
      try {
        if (wordCZ.toLowerCase() === answer.toLowerCase()) {
          setCorrectly(true);
          setRightAnswer(`Tvá odpověď je správná. [${accent}]`);
          rightProgress(idLoggedUser, idVocabulary);
        } else if (actualyVocabulary.englishOption.includes(answer)) {
          setCorrectly(false);
          setRightAnswer(
            `Skoro správně, přesná odpověd je ${wordCZ}. [${accent}]`
          );
          setSecondCorretly(true);
          rightProgress(idLoggedUser, idVocabulary);
        } else {
          setCorrectly(false);
          setWrongAnswer(`Chyba, správná odpověď je: ${wordCZ} [${accent}]`);
          WrongProgress(idLoggedUser, idVocabulary);
        }
      } catch (error) {
        console.error(error);
      }
      setIsFormSend(true);
    };
    // Použití setTimeout k odložení vyhodnocení
    setTimeout(evaluateAndSetState, 300);
  };

  return (
    <div className="w-full p-4 bg-gray-100 flex flex-col justify-center items-center h-screen">
       <div>
      <SummaryProgress />
      </div>
    
      <div>{noVocabulary}</div>
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
                <div className="text-gray-800 font-medium">{wordEN}</div>
                <input
                  className="border-b-2 border-gray-400 focus:border-blue-500 bg-transparent outline-none pl-2 text-lg"
                  type="text"
                  value={answer}
                  placeholder="Napište anglické slovo"
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </section>

              {isFomrSend ? (
                <div>
                  {" "}
                  <button
                    type="button"
                    onClick={() => {
                      eliminatedThisVocabulary(idLoggedUser, idVocabulary);
                      setNotification(
                        "Slovíčko bylo úspěšně vymazáno z procvičování"
                      );
                    }}
                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 mr-4"
                  >
                    Vyřadit
                  </button>
                  <button
                    className="mt-10 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
                    onClick={generatorRandomNumber}
                  >
                    Další slovíčko
                  </button>
                  <div>{notification}</div>
                </div>
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
