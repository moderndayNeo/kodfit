import React, { createContext } from 'react';
import getRandomNumbersArray from '../PageView/CalendarApp/RandomExerciseGen/randIndexGenerator';

export const ExerciseContext = createContext();

export default function exerciseContext({children}) {

  return (
    <ExerciseContext.Provider value={{calendarExercisesList: getRandomNumbersArray(7)}}>
      {children}
    </ExerciseContext.Provider>
  )
}
