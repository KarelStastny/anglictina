import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseEnglish } from "../../context/EnglishContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const { loggedUser, setLoggedUser } = UseEnglish();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return (
    <nav className="bg-indigo-900 p-3 text-white flex items-center justify-between">
      <h1 className="text-white text-xl">
        <Link to={"/"}>Angličtina</Link>
      </h1>
      {/* Tlačítko pro mobilní menu */}
      <div
        onClick={() => setHamburgerMenu(!hamburgerMenu)}
        className="lg:hidden z-20 cursor-pointer"
      >
        {hamburgerMenu ? (
          <AiOutlineClose className="text-white text-3xl" />
        ) : (
          <RxHamburgerMenu className="text-white text-3xl" />
        )}
      </div>
      {/* Mobilní menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-indigo-900 p-3 space-y-4 flex flex-col items-center z-10 transform ${
          hamburgerMenu ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <ul className="text-white gap-4 flex flex-col mt-12">
          <li>
            <Link
              to="/"
              onClick={() => setHamburgerMenu(false)}
              className="hover:bg-indigo-700 px-3 py-2 rounded-md text-lg"
            >
              Home
            </Link>
          </li>
          {!loggedUser && (
            <li>
              <Link
              onClick={() => setHamburgerMenu(false)}
                to="/login"
                className="hover:bg-indigo-700 px-3 py-2 rounded-md text-lg"
              >
                Přihlášení
              </Link>
            </li>
          )}
           <li>
                <Link
                onClick={() => setHamburgerMenu(false)}
                  to="/info"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-lg"
                >
                  Technické Info
                </Link>
                </li>

          {loggedUser && (
            <>
              <li>
                <Link
                onClick={() => setHamburgerMenu(false)}
                  to="/exercise"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-lg"
                >
                  Procvičování
                </Link>
              </li>
              <li>
                <Link
                onClick={() => setHamburgerMenu(false)}
                  to="/user"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-lg"
                >
                  Uživatel
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => {setLoggedUser(""); setHamburgerMenu(false)}}
                  className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md"
                >
                  Odhlásit se
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Menu pro velké obrazovky */}
      <div className="hidden lg:block">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
            >
              Home
            </Link>
          </li>
          {!loggedUser && (
            <li>
              <Link
                to="/login"
                className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
              >
                Přihlášení
              </Link>
            </li>
          )}
            <li>
                <Link
                  to="/info"
                  className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
                >
                  Technické Info
                </Link>
                </li>

          {loggedUser && (
            <>
              <li>
                <Link
                  to="/exercise"
                  className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
                >
                  Procvičování
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
                >
                  Uživatel
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => setLoggedUser("")}
                  className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md"
                >
                  Odhlásit se
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
