import React,{useState, useEffect, createContext, useContext} from "react"

import { user } from "../data/user"


// Vytvoření kontextu
const EnglishContext = createContext()

export const EnglishContextProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(user[0])


    return(<EnglishContext.Provider value={{loggedUser, setLoggedUser}}>
        {children}
    </EnglishContext.Provider>)
}


// Export kontextu
export const UseEnglish = () => {
    return useContext(EnglishContext)
  }