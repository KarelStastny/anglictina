import React from "react";
import { Link } from "react-router-dom";
import { UseEnglish } from "../context/EnglishContext";

const Home = () => {
  const { loggedUser } = UseEnglish();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        {loggedUser ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              Vítejte, {loggedUser.name}!
            </h2>
            <p className="mt-4">
              Jste přihlášeni a můžete začít procvičovat svoje jazykové
              dovednosti. Vyberte si z různých typů cvičení pro posílení vaší
              angličtiny.
            </p>
            <div className="mt-6">
              <Link
                to="/exercise"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Začít procvičovat
              </Link>
            </div>
           

          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Vítejte v aplikaci English Trainer!
            </h1>
            <p className="mt-4 mb-8">
              Tato aplikace je vaším pomocníkem pro procvičování a rozšíření
              slovní zásoby v anglickém jazyce. Pro využití plného potenciálu
              aplikace se prosím přihlašte nebo vytvořte nový účet.
            </p>
            <div className="flex flex-col items-center">
              <Link
                to="/login"
                className="mb-4 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                Přihlášení
              </Link>
              <Link
                to="/registration"
                className="inline-block bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
              >
                Registrace
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
