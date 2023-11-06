import React from 'react';
import { UseEnglish } from "../context/EnglishContext";

const LogOut = () => {
    const { setLoggedUser } = UseEnglish();

    return (
        <div className=" bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mt-8">
            <h2 className="text-lg font-semibold mb-4 text-center text-red-800">Zde se můžete odhlásit</h2>
            <div className="flex justify-center">
                <button 
                    onClick={() => setLoggedUser(null)} 
                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                >
                    Odhlásit se
                </button>
            </div>
        </div>
    );
}

export default LogOut;
