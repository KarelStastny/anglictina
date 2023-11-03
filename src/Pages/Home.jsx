import React from 'react'
import { vocabulary } from '../data/vocabulary'
import Exercise from '../components/Exercise';

const Home = () => {
  console.log(vocabulary);

  return (
    <div>
      Udělat obrácenou komponentu z aj do cz při rozdělení co uživatel zvolí
      <Exercise/>
    </div>
  )
}

export default Home
