import React, {useState} from "react";
import { UseEnglish } from "../context/EnglishContext";

const User = () => {
  const { loggedUser } = UseEnglish();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  console.log(loggedUser);
  const { firstName, secondName, allStudyProgress, studyVocabulary
  } = loggedUser;

  // Zkontrolujte, zda allStudyProgress má alespoň jeden prvek před přístupem k jeho vlastnostem
  const progressAll = allStudyProgress[0] || {
    timesAllPracticed: 0,
    timesCorrect: 0,
    timesIncorrect: 0,
  };
  const showModal = (wordDetails) => {
    setModalContent(wordDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              <th className="text-left pl-8 ">Česky</th>
              <th className="text-left pl-8">Anglicky</th>
              <th className="text-left pl-8">Počet všech opakování</th>
              <th className="text-left pl-8">Správně zodpovězeno</th>
              <th className="text-left pl-8">Chybně zodpovězeno</th>
              <th className="text-left pl-8">Umím slovíčko?</th>
            </tr>
          </thead>
           {/* Modální okno */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
              <h2 className="text-lg font-bold mb-4">{modalContent.englishWord} - {modalContent.czechWord}</h2>
              <p><strong>Přízvuk:</strong> {modalContent.accent}</p>
              <p><strong>Kategorie:</strong> {modalContent.animal}</p>
              <p><strong>Náročnost:</strong> {modalContent.hard}</p>
              <p><strong>Typ:</strong> {modalContent.type}</p>
              <div className="mt-4">
                <p><strong>Přípustné a podobné verze slova:</strong></p>
                <p><strong>České:</strong></p>
                {modalContent.czechOption.map((option, index) => (
                  <p key={index}>{option}</p>
                ))}
                <p><strong>Anglické:</strong></p>
                {modalContent.englishOption.map((option, index) => (
                  <p key={index}>{option}</p>
                ))}
              </div>
              <button 
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ease-in-out duration-300"
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}
    
          <tbody>
          {loggedUser.studyVocabulary.map((one, index) => {
            const knowThisVocabulary = one.studyProgress[0].timesCorrect > one.studyProgress[0].timesIncorrect;
            return (
              <tr
                className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                key={index}
              >
                {/* ... ostatní buňky tabulky ... */}
                <td onClick={() => showModal(one)} className="group relative text-left px-8 py-4 text-blue-600 cursor-pointer ">
                  {one.czechWord}

               
                </td>
               
                <td className="text-left px-8 py-4">{one.englishWord}</td>
                  <td className="text-left px-8 py-4">{one.studyProgress[0].timesPractice}</td>
                  <td className="text-left px-8 py-4">{one.studyProgress[0].timesCorrect}</td>
                  <td className="text-left px-8 py-4">{one.studyProgress[0].timesIncorrect}</td>
                  <td className={`px-8 py-4 ${knowThisVocabulary ? "text-green-500" : "text-red-500"}`}>{knowThisVocabulary ? "Ano" : "Ne"}</td>
                {/* ... ostatní buňky tabulky ... */}
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
