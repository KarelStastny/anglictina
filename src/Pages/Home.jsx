import React from 'react'
import { vocabulary } from '../data/vocabulary'
import Exercise from '../components/Exercise';
import SummaryProgress from '../components/SummaryProgress';

const Home = () => {
  console.log(vocabulary);

  return (
    <div>
      Udělat obrácenou komponentu z aj do cz při rozdělení co uživatel zvolí
      <Exercise/>
      <SummaryProgress/>
    </div>
  )
}

export default Home
