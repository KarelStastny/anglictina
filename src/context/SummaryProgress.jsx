import React from 'react'
import { UseEnglish } from './EnglishContext'

const SummaryProgress = () => {
    const {loggedUser} = UseEnglish()


  return (
    <div className='w-[200px]'>
      {loggedUser.allStudyProgress.map((one) => {
        return <div>
            <div><span>Celkově procvičeno slovíček:</span>{one.timesAllPracticed}</div>
            <div><span>Správná slovíčka:</span>{one.timesCorrect}</div>
            <div><span>Chybná slovíčka:</span>{one.timesIncorrect}</div>
        </div>
      })}
    </div>
  )
}

export default SummaryProgress
