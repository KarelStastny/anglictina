import React, { useState, useEffect } from "react";
import { vocabulary } from "../data/vocabulary";
import { UseEnglish } from "../context/EnglishContext";

const ExerciseENfromCZ = () => {
  const {
    loggedUser,
    setLoggedUser,
    rightAnswerProgress,
    wrongAnswerProgress,
  } = UseEnglish();

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
  const [id, setId] = useState("");
  const [userCurrentWord, setUserCurrentWord] = useState([]);

  //system for random word
  const generatorRandomNumber = () => {
    const min = 0;
    const max = vocabulary.length - 1;

    // calculation
    const random = Math.floor(Math.random() * (max - min + 1));

    setActulyVocabulary(vocabulary[random]);
    setWordCZ(vocabulary[random].czechWord);
    setWordEN(vocabulary[random].englishWord);
    setAccent(vocabulary[random].accent);
    setId(vocabulary[random].id);

    // Nalzenení slovíčka od uživatele pro vypsání hodnot - zatím mi nefunguje
    // const findThisUserVocabulary = () => {
    //   const foundWord = loggedUser.studyVocabulary.find(one => one.id === id);

    //   if (foundWord) {
    //     setUserCurrentWord(foundWord);
    //   } else {
    //     // Nenalezli jsme slovo, tak nastavíme vše na nuly
    //     setUserCurrentWord(false);
    //   }
    // };

    // findThisUserVocabulary()

    // clear input answer
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
      if (wordCZ === answer) {
        setCorrectly(true);
        setRightAnswer(`Tvá odpověď je správná.`);
        rightAnswerProgress(actualyVocabulary);
      } else if (actualyVocabulary.englishOption.includes(answer)) {
        setCorrectly(false);
        setRightAnswer(`Skoro správně, přesná odpověd je ${wordCZ}.`);
        setSecondCorretly(true);
        rightAnswerProgress(actualyVocabulary);
      } else {
        setCorrectly(false);
        setWrongAnswer(`Chyba, správná odpověď je: ${wordCZ}`);
        wrongAnswerProgress(actualyVocabulary);
      }
    } catch (error) {
      console.error(error);
    }
    setIsFormSend(true);
  };

  return (
    <div className="w-full p-4">
      <div>
        <div className="h-[50px] w-[800px] m-auto border-t border-l border-r  bg-sky-400">
          {/* Správnost slovíčka */}
          {/* <section>
        <div>
          <div>Počet opakování</div>
          <div>
 
  </div>
        
        </div>
        <div>
          <div>Správně zodpovězeno</div>
          <div></div>
          
        </div>
        <div>
          <div>Špatně zodpovězeno</div>
          <div></div>
          
        </div>
        <div>
          <div>Počet opakování</div>
          <div></div>
          
        </div>
      </section> */}
        </div>

        <div className="max-w-[800px] h-[450px]  border m-auto p-4 flex  items-center justify-center flex-col">
          {start ? (
            <button
              className="text-xl bg-blue-400 px-4 py-2 rounded-xl hover:bg-blue-500 transition-all duration-100"
              onClick={() => {
                setStart(false);
                generatorRandomNumber();
              }}
            >
              Chcete začít
            </button>
          ) : (
            <>
              {/* Check */}
              <div className="mb-10">
                <div
                  className={
                    correctly
                      ? "text-green-500"
                      : secondCorrectly
                      ? "text-orange-500"
                      : "text-red-500"
                  }
                >
                  {correctly
                    ? rightAnswer
                    : secondCorrectly
                    ? rightAnswer
                    : wrongAnswer}
                </div>
              </div>

              {/* Words */}
              <form
                className="flex items-center justify-center flex-col"
                onSubmit={submitForm}
              >
                {/* Words */}
                <section className="flex gap-6 items-center justify-center">
                  {/* Czech Word */}
                  <div>{wordEN}</div>
                  {/* English Word */}
                  <input
                    className="border-b-2 border-black bg-transparent outline-none pl-2 "
                    type="text"
                    value={answer}
                    placeholder="write English word"
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </section>
                {/* Submit or next  */}

                {isFomrSend ? (
                  <button
                    className="mt-10 bg-blue-400 px-3 py-1 rounded-lg hover:bg-blue-500 transition-all duration-150 cursor-pointer "
                    onClick={generatorRandomNumber}
                  >
                    Další slovíčko
                  </button>
                ) : (
                  <input
                    className="mt-10 bg-blue-400 px-3 py-1 rounded-lg hover:bg-blue-500 transition-all duration-150  "
                    type="submit"
                  />
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseENfromCZ;
