import React from 'react';
import { UseEnglish } from '../context/EnglishContext';

const SummaryProgress = () => {
  const { loggedUser } = UseEnglish();

  return (
    <div className=' md:w-[600px] lg:w-[800px] xl:w-[1000px] w-[300px] bg-gray-100 p-4 rounded-lg shadow'>
      {loggedUser.allStudyProgress.map((one, index) => (
        <div key={index} className="mb-4 last:mb-0">
          <div className='flex justify-between items-center'>
            <span className="text-sm font-medium text-gray-700">Celkově procvičeno slovíček:</span>
            <span className="text-sm text-blue-600">{one.timesAllPracticed}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className="text-sm font-medium text-gray-700">Správná slovíčka:</span>
            <span className="text-sm text-green-600">{one.timesCorrect}</span>
          </div>
          <div className='flex justify-between items-center'>
            <span className="text-sm font-medium text-gray-700">Chybná slovíčka:</span>
            <span className="text-sm text-red-600">{one.timesIncorrect}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryProgress;
