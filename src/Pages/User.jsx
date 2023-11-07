import React, { useState } from "react";
import { UseEnglish } from "../context/EnglishContext";
import Account from "./Account";
import { Link } from "react-router-dom";

const User = () => {
  const { loggedUser } = UseEnglish();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

// Destructing
  const {
    firstName,
    secondName,
    allStudyProgress = [],
    studyVocabulary = [],
  } = loggedUser;

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
        <span className="text-xl block">
          {firstName} {secondName}
        </span>
      </h1>

      <div className="my-6 p-4 text-center">
        <h2 className="text-lg font-semibold mb-4">
          Přejete si upravit údaje ve svém účtu?
        </h2>
        <Link
          to="/account"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition ease-in-out duration-300"
        >
          Upravit účet
        </Link>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Souhrn Vašeho Opakování:</h2>
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <label className="text-gray-500">Počet Všech opakování</label>
            <p className="text-gray-700 font-semibold">
              {allStudyProgress[0]?.timesAllPracticed ?? "0"}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <label className="text-gray-500">
              Celkový počet správných odpovědí
            </label>
            <p className="text-gray-700 font-semibold">
              {allStudyProgress[0]?.timesCorrect ?? "0"}
            </p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <label className="text-gray-500">
              Celkový počet chybných odpovědí
            </label>
            <p className="text-gray-700 font-semibold">
              {allStudyProgress[0]?.timesIncorrect ?? "0"}
            </p>
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
              <th className="text-left pl-8">Vyřazeno z Opakování?</th>

            </tr>
          </thead>
          {/* Modální okno */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-6 rounded shadow-lg w-1/2">
                  <h2 className="text-lg font-bold mb-4">
                    {modalContent.englishWord} - {modalContent.czechWord}
                  </h2>
                  <p>
                    <strong>Přízvuk:</strong> {modalContent.accent}
                  </p>
                  <p>
                    <strong>Kategorie:</strong> {modalContent.animal}
                  </p>
                  <p>
                    <strong>Náročnost:</strong> {modalContent.hard}
                  </p>
                  <p>
                    <strong>Typ:</strong> {modalContent.type}
                  </p>
                  <div className="mt-4">
                    <p>
                      <strong>Přípustné a podobné verze slova:</strong>
                    </p>
                    <p>
                      <strong>České:</strong>
                    </p>
                    {modalContent.czechOption.map((option, index) => (
                      <p key={index}>{option}</p>
                    ))}
                    <p>
                      <strong>Anglické:</strong>
                    </p>
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

            {/* Vypsání pouze těch která už byla někdy cvičená */}
            {loggedUser.studyVocabulary.map((one, index) => {
              const knowThisVocabulary =
                one.studyProgress.timesCorrect >
                one.studyProgress.timesIncorrect;

             


              if (one.studyProgress.timesPractice >= 1) {
                return (
                  <tr
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                    key={index}
                  >
                    {/* ... ostatní buňky tabulky ... */}
                    <td
                      onClick={() => showModal(one)}
                      className="group relative text-left px-8 py-4 text-blue-600 cursor-pointer "
                    >
                      {one.czechWord}
                    </td>

                    <td className="text-left px-8 py-4">{one.englishWord}</td>
                    <td className="text-left px-8 py-4">
                      {one.studyProgress.timesPractice}
                    </td>
                    <td className="text-left px-8 py-4">
                      {one.studyProgress.timesCorrect}
                    </td>
                    <td className="text-left px-8 py-4">
                      {one.studyProgress.timesIncorrect}
                    </td>
                    <td
                      className={`px-8 py-4 ${
                        knowThisVocabulary ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {knowThisVocabulary ? "Ano" : "Ne"}
                    </td>
                    <td
                      className={`px-8 py-4 ${
                        one.eliminated ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {one.eliminated ? "Ano" : "Ne"}
                
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
