import React,{useState, useEffect, createContext, useContext} from "react"

import { user } from "../data/user"
import { vocabulary } from "../data/vocabulary"


// Vytvoření kontextu
const EnglishContext = createContext()

export const EnglishContextProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(user[0])
    const [registredUser, setRegistredUser] = useState(user)
  
 

// Správně zodpovězené slovíčko + skoro správně
    const rightAnswerProgress = (actualyVocabulary) => {
        setLoggedUser(prevUser => {
          // kopie stávajícího uživatele a jeho pokroku
          let newUser = { ...prevUser };
          newUser.allStudyProgress[0].timesAllPracticed += 1;
          newUser.allStudyProgress[0].timesCorrect += 1

        //   Heledání slovíčka
          const existingVocab = newUser.studyVocabulary.find(vocab => vocab.id === actualyVocabulary.id)
           
        //   Pokud slovíčko existuje
        if(existingVocab){
            existingVocab.studyProgress[0].timesPractice += 1;
            existingVocab.studyProgress[0].timesCorrect += 1;
        }else {
            // Slovíčko neexistuje, přidáme ho do pole s inicializovaným studyProgress
            newUser.studyVocabulary.push({
              ...actualyVocabulary,
              studyProgress: [{
                timesPractice: 1,
                timesCorrect: 1,
                timesIncorrect: 0,
                learned: false
              }]
            });
          }
        
          return newUser;
        });
      };

      // Správně zodpovězené slovíčko + skoro správně
    const wrongAnswerProgress = (actualyVocabulary) => {
        setLoggedUser(prevUser => {
          // kopie stávajícího uživatele a jeho pokroku
          let newUser = { ...prevUser };
          newUser.allStudyProgress[0].timesAllPracticed += 1;
          newUser.allStudyProgress[0].timesIncorrect += 1

        //   Heledání slovíčka
          const existingVocab = newUser.studyVocabulary.find(vocab => vocab.id === actualyVocabulary.id)
           
        //   Pokud slovíčko existuje
        if(existingVocab){
            existingVocab.studyProgress[0].timesPractice += 1;
            existingVocab.studyProgress[0].timesIncorrect += 1;
        }else {
            // Slovíčko neexistuje, přidáme ho do pole s inicializovaným studyProgress
            newUser.studyVocabulary.push({
              ...actualyVocabulary,
            
              studyProgress: [{
                timesPractice: 1,
                timesCorrect: 0,
                timesIncorrect: 1,
                learned: false
              }]
            });
          }
        
          return newUser;
        });
      };


      


    return(<EnglishContext.Provider value={{loggedUser, setLoggedUser, rightAnswerProgress, wrongAnswerProgress, setRegistredUser, registredUser}}>
        {children}
    </EnglishContext.Provider>)
}


// Export kontextu
export const UseEnglish = () => {
    return useContext(EnglishContext)
  }