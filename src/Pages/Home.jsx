import React from 'react'
import { vocabulary } from '../data/vocabulary'
import { Link } from 'react-router-dom';
import ExerciseENfromCZ from '../components/ExerciseENfromCZ';
import ExerciseCZfromEN from "../components/ExerciseCZfromEN"
import SummaryProgress from '../components/SummaryProgress';
import { UseEnglish } from '../context/EnglishContext';

const Home = () => {
  console.log(vocabulary);
  const { loggedUser } = UseEnglish();

  return (
    <div>
      {
        loggedUser ? (
          <div> 
            <h2>Vítejte uživateli</h2>
            <p>Chceteli se se pustit do procvičování prosím pokračujte</p>
            <Link to="/exercise">Začít procvičovat</Link>
          </div>
        ) : (
          <>
            <h1>Vítejte v aplikaci na trénink slovíček</h1>
            <p>Prosím před začátkem se přihlašte nebo zaregistrujte:</p>
            <Link to="/login">Přihlášení</Link>
            <Link to="/registration">Registrace</Link>
          </>
        )
      }
    </div>
  );
};

export default Home;
