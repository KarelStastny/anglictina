import React, { useState, useEffect, createContext, useContext } from "react";
import { user } from "../data/user";

// Vytvoření kontextu
const EnglishContext = createContext();

export const EnglishContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(user[0]);
  const [registredUser, setRegistredUser] = useState(user);
  const [typeOfExercise, setTypeofExercise] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [filtredSystem, setFiltredSystem] = useState(loggedUser.studyVocabulary);

  // Filtrovací systém pro slovíčka


  const rightProgress = (idLoggedUser, idVocabulary) => {
    const updatedUsers = registredUser.map((user) => {
      if (user.id === idLoggedUser) {
        // Aktualizace pro allStudyProgress
        const updatedAllStudyProgress = {
          ...user.allStudyProgress[0],
          timesAllPracticed: user.allStudyProgress[0].timesAllPracticed + 1,
          timesCorrect: user.allStudyProgress[0].timesCorrect + 1,
        };

        // Aktualizace pro studyVocabulary
        const updatedVocabulary = user.studyVocabulary.map((vocab) => {
          if (vocab.id === idVocabulary) {
            return {
              ...vocab,
              studyProgress: {
                ...vocab.studyProgress,
                timesPractice: vocab.studyProgress.timesPractice + 1,
                timesCorrect: vocab.studyProgress.timesCorrect + 1,
                tested: true,
              },
            };
          }
          return vocab;
        });

        // Aktualizace celého uživatelského objektu
        const updatedUser = {
          ...user,
          allStudyProgress: [updatedAllStudyProgress],
          studyVocabulary: updatedVocabulary,
        };

        // Aktualizace loggedUser, pokud je třeba
        if (loggedUser && user.id === loggedUser.id) {
          setLoggedUser(updatedUser);
        }

        return updatedUser;
      }
      return user;
    });

    // Nastavte aktualizované pole uživatelů jako nový stav
    setRegistredUser(updatedUsers);
  };

  const WrongProgress = (idLoggedUser, idVocabulary) => {
    const updatedUsers = registredUser.map((user) => {
      if (user.id === idLoggedUser) {
        // Aktualizace pro allStudyProgress
        const updatedAllStudyProgress = {
          ...user.allStudyProgress[0],
          timesAllPracticed: user.allStudyProgress[0].timesAllPracticed + 1,
          timesIncorrect: user.allStudyProgress[0].timesIncorrect + 1,
        };

        // Aktualizace pro studyVocabulary
        const updatedVocabulary = user.studyVocabulary.map((vocab) => {
          if (vocab.id === idVocabulary) {
            return {
              ...vocab,
              studyProgress: {
                ...vocab.studyProgress,
                timesPractice: vocab.studyProgress.timesPractice + 1,
                timesIncorrect: vocab.studyProgress.timesIncorrect + 1,
                tested: true,
              },
            };
          }
          return vocab;
        });

        // Aktualizace celého uživatelského objektu
        const updatedUser = {
          ...user,
          allStudyProgress: [updatedAllStudyProgress],
          studyVocabulary: updatedVocabulary,
        };

        // Aktualizace loggedUser, pokud je třeba
        if (loggedUser && user.id === loggedUser.id) {
          setLoggedUser(updatedUser);
        }

        return updatedUser;
      }
      return user;
    });

    // Nastavte aktualizované pole uživatelů jako nový stav
    setRegistredUser(updatedUsers);
  };

  const eliminatedThisVocabulary = (idLoggedUser, idVocabulary) => {
    const updatedUsers = registredUser.map((user) => {
      if (user.id === idLoggedUser) {
        // Aktualizace pro studyVocabulary
        const updatedVocabulary = user.studyVocabulary.map((vocab) => {
          if (vocab.id === idVocabulary) {
            return {
              ...vocab,
              eliminated: true,
            };
          }
          return vocab;
        });

        // Aktualizace celého uživatelského objektu
        const updatedUser = {
          ...user,
          studyVocabulary: updatedVocabulary,
        };

        // Aktualizace loggedUser, pokud je třeba
        if (loggedUser && user.id === loggedUser.id) {
          setLoggedUser(updatedUser);
        }

        return updatedUser;
      }
      return user;
    });

    // Nastavení aktualizovaného pole uživatelů jako nového stavu
    setRegistredUser(updatedUsers);
  };

  return (
    <EnglishContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        setRegistredUser,
        registredUser,
        typeOfExercise,
        setTypeofExercise,
        hamburgerMenu,
        setHamburgerMenu,
        rightProgress,
        WrongProgress,
        eliminatedThisVocabulary,
        filtredSystem,
        setFiltredSystem,
      }}
    >
      {children}
    </EnglishContext.Provider>
  );
};

// Export kontextu
export const UseEnglish = () => {
  return useContext(EnglishContext);
};
