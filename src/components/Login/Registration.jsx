import React, { useEffect, useState } from "react";
import { user } from "../../data/user";
import { UseEnglish } from "../../context/EnglishContext";

const Registration = () => {
  const { setRegistredUser, registredUser } = UseEnglish();

  const [notification, setNotification] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

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

      console.log(registredUser);
      // Poteé tam bude přesměrování na příhlašovací stránku
    }
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        {/* userName */}
        <div>
          <label className="mr-4">Přihlašovací jméno</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-b-2 border-gray-700"
            type="text"
          />
        </div>
        {/* FirstName */}
        <div>
          <label className="mr-4">Křesní jméno</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-b-2 border-gray-700"
            type="text"
          />
        </div>
        {/* secondName */}
        <div>
          <label className="mr-4">Příjmení</label>
          <input
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            className="border-b-2 border-gray-700"
            type="text"
          />
        </div>
        {/* password 1 */}
        <div>
          <label className="mr-4">Heslo:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-2 border-gray-700"
            type={passwordVisibility ? "text" : "password"}
          />
        </div>
        {/* password 2 */}
        <div>
          <label className="mr-4">Heslo Kontrola:</label>
          <input
            value={passwordSecond}
            onChange={(e) => setPasswordSecond(e.target.value)}
            className="border-b-2 border-gray-700"
            type={passwordVisibility ? "text" : "password"}
          />
        </div>
        <button type="button" onClick={showPassword}>
          Zobrazit heslo
        </button>
        <button type="submit">Registrovat se</button>
      </form>
      <div>{notification}</div>
    </div>
  );
};

export default Registration;
