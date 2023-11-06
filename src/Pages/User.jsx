import React from "react";
import { UseEnglish } from "../context/EnglishContext";

const User = () => {
  const { loggedUser } = UseEnglish();

  console.log(loggedUser);
  const { firstName, secondName, allStudyProgress, studyVocabulary
  } = loggedUser;

  // Zkontrolujte, zda allStudyProgress má alespoň jeden prvek před přístupem k jeho vlastnostem
  const progressAll = allStudyProgress[0] || {
    timesAllPracticed: 0,
    timesCorrect: 0,
    timesIncorrect: 0,
  };





  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Vítejte ve svém přehledu uživateli{" "}
        <span className="text-xl block">{firstName} {secondName}</span>
      </h1>
  
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Souhrn Vašeho Opakování:</h2>
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <label className="text-gray-500">Počet Všech opakování</label>
            <p className="text-gray-700 font-semibold">{progressAll.timesAllPracticed}</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <label className="text-gray-500">Celkový počet správných odpovědí</label>
            <p className="text-gray-700 font-semibold">{progressAll.timesCorrect}</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <label className="text-gray-500">Celkový počet chybných odpovědí</label>
            <p className="text-gray-700 font-semibold">{progressAll.timesIncorrect}</p>
          </div>
        </section>
      </div>
  
      {/* Konkrétní data */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 border-gray-300 border-b py-8">
              <th className="text-left pl-8">Česky</th>
              <th className="text-left pl-8">Anglicky</th>
              <th className="text-left pl-8">Počet všech opakování</th>
              <th className="text-left pl-8">Správně zodpovězeno</th>
              <th className="text-left pl-8">Chybně zodpovězeno</th>
              <th className="text-left pl-8">Umím slovíčko?</th>
            </tr>
          </thead>
          <tbody>
            {loggedUser.studyVocabulary.map((one, index) => {
              const knowThisVocabulary = one.studyProgress[0].timesCorrect > one.studyProgress[0].timesIncorrect;
  
              return (
                <tr className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <td className="text-left px-8 py-4">{one.czechWord}</td>
                  <td className="text-left px-8 py-4">{one.englishWord}</td>
                  <td className="text-left px-8 py-4">{one.studyProgress[0].timesPractice}</td>
                  <td className="text-left px-8 py-4">{one.studyProgress[0].timesCorrect}</td>
                  <td className="text-left px-8 py-4">{one.studyProgress[0].timesIncorrect}</td>
                  <td className={`px-8 py-4 ${knowThisVocabulary ? "text-green-500" : "text-red-500"}`}>{knowThisVocabulary ? "Ano" : "Ne"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default User;
