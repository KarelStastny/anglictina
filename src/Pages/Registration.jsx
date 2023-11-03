import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { UseEnglish } from "../context/EnglishContext";

const Registration = () => {
  const { setRegistredUser, registredUser } = UseEnglish();

  const [notification, setNotification] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const navigate = useNavigate()
  // show write password
  const showPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  // Odeslání formuláře
  const sendForm = (e) => {
    e.preventDefault();

    const smallLetter = "abcdefghijklmnopqrstuvwxyz";
    const bigLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const oneNumber = "123456789";
    const specialCharacters = "@&|#!-_?";
    const czechDiatritic = "áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ";

    // Kontrola, zda heslo obsahuje požadované znaky
    const contains = (password, characters) => {
      return characters.split("").some((char) => password.includes(char));
    };

    // Kontrola, zda heslo obsahuje české diakritické znaky
    const containsDiacritics = (password) => {
      return czechDiatritic.split("").some((char) => password.includes(char));
    };

    // Zkontroluje všechny potřebné položky
    if (
      !userName ||
      !firstName ||
      !secondName ||
      !password ||
      !passwordSecond
    ) {
      setNotification("Nevyplnili jste všechny údaje");
    } else if (password !== passwordSecond) {
      setNotification("Hesla se neshodují");
    } else if (
      password.length < 8 ||
      !contains(password, smallLetter) ||
      !contains(password, bigLetter) ||
      !contains(password, oneNumber) ||
      !contains(password, specialCharacters) ||
      containsDiacritics(password)
    ) {
      setNotification(
        "Heslo musí obsahovat alespoň 8 znaků, velké a malé písmeno, číslo a speciální znak a nesmí obsahovat českou diakritiku"
      );
    } else if (registredUser.some((one) => one.id === userName)) {
      setNotification(
        "Uživatel s tímto přihlašovacím jménem je již registrován"
      );
    } else {
      // Zde byste implementovali logiku pro registraci uživatele
      setNotification("Registrace byla úspěšná");
      const newUser = {
        userName: userName,
        password: password,
        firstName: firstName,
        secondName: secondName,
        id: userName,
        studyVocabulary:[],
        allStudyProgress: [
          {
            timesAllPracticed: 0,
            timesCorrect: 0,
            timesIncorrect: 0,
          },]
          
      };
      setRegistredUser([...registredUser, newUser]);

      // Vyprázdnění imputu
      setUserName("");
      setFirstName("");
      setSecondName("");
      setPassword("");
      setPasswordSecond("");

      navigate("/login")

      console.log(registredUser);
      // Poteé tam bude přesměrování na příhlašovací stránku
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-center">Registrace</h1>
        <form onSubmit={sendForm} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Přihlašovací jméno</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Uživatelské jméno"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Křesní jméno</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Křesní jméno"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Příjmení</label>
            <input
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Příjmení"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Heslo</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type={passwordVisibility ? "text" : "password"}
              placeholder="Heslo"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Heslo Kontrola</label>
            <input
              value={passwordSecond}
              onChange={(e) => setPasswordSecond(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type={passwordVisibility ? "text" : "password"}
              placeholder="Zadejte heslo znovu"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={showPassword}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              Zobrazit heslo
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Registrovat se
            </button>
          </div>
        </form>
        {notification && (
          <div className="p-4 mt-4 text-sm text-center text-red-600 bg-red-100 rounded-md">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default Registration;
