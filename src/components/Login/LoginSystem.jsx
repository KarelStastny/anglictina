import React, { useState } from "react";
import { UseEnglish } from "../../context/EnglishContext";


const LoginSystem = () => {
  const { setRegistredUser, registredUser, setLoggedUser, loggedUser } = UseEnglish();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [notification, setNotification] = useState("");

  // show write password
  const showPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const sendForm = (event) => {
    event.preventDefault(); // Toto zabraňuje obnovení stránky.

    if (!userName || !password) {
      setNotification("nevyplnili jste jméno nebo heslo");
    } 
    
    
    
    
    
    
      // Find the registered user
      const user = registredUser.find(u => u.id === userName && u.password === password);

      if (user) {
        setLoggedUser(user); // Set the logged in user in the context
        setNotification("Uživatel úspěšně přihlášen.");
        console.log(user);
      } else {
        setNotification("Nesprávné přihlašovací jméno nebo heslo.");
      }
    };

  // Tato část by měla být mimo sendForm
  return (
    <div>
      <form onSubmit={sendForm}>
        {/* userName */}
        <div>
          <label className="mr-4">Přihlašovací jméno:</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-b-2 border-gray-700"
            type="text"
          />
        </div>

        {/* password */}
        <div>
          <label className="mr-4">Heslo:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-2 border-gray-700"
            type={passwordVisibility ? "text" : "password"}
          />
        </div>
        
        <button type="button" onClick={showPassword}>
          Zobrazit heslo
        </button>
        <button type="submit">Přihlásit se</button>
      </form>
      {notification && <div>{notification}</div>}
    </div>
  );
};

export default LoginSystem;
