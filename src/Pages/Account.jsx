import React, { useState, useContext } from "react";
import { UseEnglish } from "../context/EnglishContext";

const Account = () => {
  const { loggedUser, setLoggedUser, registredUser, setRegistredUser } =
    UseEnglish();
  const [userName, setUserName] = useState(loggedUser.userName);
  const [firstName, setFirstName] = useState(loggedUser.firstName);
  const [secondName, setSecondName] = useState(loggedUser.secondName);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [notification, setNotification] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPassword === loggedUser.password) {
      // Najděte a aktualizujte uživatele v registredUser
      const updatedUsers = registredUser.map((user) => {
        if (user.id.toLocaleLowerCase() === loggedUser.id.toLocaleLowerCase()) {
          let updatedUser = {
            ...user,
            userName: userName,
            firstName: firstName,
            secondName: secondName,
          };

          // Aktualizace hesla, pokud je potřeba
          if (newPassword && newPassword === confirmNewPassword) {
            updatedUser.password = newPassword;
            setNotification(
              "Úspěšně jste aktualizovali své údaje včetně hesla"
            );
          } else if (newPassword && newPassword !== confirmNewPassword) {
            setNotification("Nová hesla se neshodují");
            return;
          }
          return updatedUser;
        }
        return user;
      });

      // Aktualizace celkového seznamu uživatelů a přihlášeného uživatele
      setRegistredUser(updatedUsers);
      const updatedLoggedUser = updatedUsers.find(
        (user) =>
          user.id.toLocaleLowerCase() === loggedUser.id.toLocaleLowerCase()
      );
      setLoggedUser(updatedLoggedUser);

      // Reset formulářových polí
      setConfirmNewPassword("");
      setCurrentPassword("");
      setNewPassword("");
      setNotification("Úspěšně jste aktualizovali své údaje");
    } else {
      setNotification("Aktuální heslo je špatně");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Uživatelské jméno:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Jméno:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Příjmení:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="secondName"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nové Heslo:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPasswords ? "text" : "password"}
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ověření Nového Hesla:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPasswords ? "text" : "password"}
            name="confirmPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Současné heslo pro kontorlu
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={showPasswords ? "text" : "password"}
            name="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="text-center text-red-500 mb-6">{notification}</div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Aktualizovat
          </button>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="button"
            onClick={toggleShowPasswords}
          >
            {showPasswords ? "Skrýt Hesla" : "Zobrazit  Hesla"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
