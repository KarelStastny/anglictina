import React, { useState } from "react";
import { UseEnglish } from "../context/EnglishContext";
import { useNavigate } from "react-router";
import LogOut from "../components/LogOut";

const Login = () => {
  const { setRegistredUser, registredUser, setLoggedUser, loggedUser } = UseEnglish();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [notification, setNotification] = useState("");

  const navigate  = useNavigate()

  // zobrazí napsané heslo
  const showPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };


  // Validace formuláře
  const sendForm = (event) => {
    event.preventDefault(); 

    // kontrola co je vyplněné
    if (!userName || !password) {
      setNotification("nevyplnili jste jméno nebo heslo");
    } 
    
  
  //  Hledání zda uživatel už není registrovaný
      const user = registredUser.find(u => u.id === userName && u.password === password);

      if (user) {
        setLoggedUser(user); 
        setNotification("Uživatel úspěšně přihlášen.");
        console.log(user);
        navigate("/")
      } else {
        setNotification("Nesprávné přihlašovací jméno nebo heslo.");
      }
    };

 
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      {loggedUser ? (<LogOut/>) : (<div className="w-full max-w-md  p-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Prosím přihlašte se
        </h2>
        <form onSubmit={sendForm} className="mt-8">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Přihlašovací jméno"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Přihlašovací jméno"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="-mt-px">
              <input
                aria-label="Heslo"
                name="password"
                type={passwordVisibility ? "text" : "password"}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Heslo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
  
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                id="show-password"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                checked={passwordVisibility}
                onChange={showPassword}
              />
              <label htmlFor="show-password" className="ml-2 block text-sm leading-5 text-gray-900">
                Zobrazit heslo
              </label>
            </div>
            
            <div className="text-sm leading-5">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline">
                Zapomenuté heslo?
              </a>
            </div>
          </div>
  
          <div className="mt-6">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">
              Přihlásit se
            </button>
          </div>
        </form>
        {notification && <p className="mt-2 text-center text-sm leading-5 text-gray-600">
          {notification}
        </p>}
      </div>)}



      
    </div>
  );
  
  
  
}

export default Login
