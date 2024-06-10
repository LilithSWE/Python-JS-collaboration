import { ChangeEvent, createContext, ReactNode, useEffect, useState } from 'react';
import data from '../data/excersises.json';
import { getTextWithFirstLetterUpperCase } from '../assets/utils/helperfunctions/helperfunctions';

interface IMuscle {
  id: number;
  muscle: string;
}

const getBackListOfObjectsWithIdAndKeyFromData = () => {};

const musclesData = data
  .map((excersise, index) => {
    return { id: index, muscle: getTextWithFirstLetterUpperCase(excersise.muscle.replace('_', '')) };
  })
  .filter((muscle, index, muscles) => {
    return index === muscles.findIndex(m => m.muscle === muscle.muscle);
  });

const ExcersisesContext = createContext<IExcersisesProps | undefined>(undefined);

interface IExcersisesProps {
  muscles: IMuscle[];
  pickMuscleFromDropDown: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface IContextProps {
  children: ReactNode;
}

export const ExcersisesContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [muscles, setMuscles] = useState<IMuscle[]>(musclesData);
  const [selectedMuscle, setSelectedMuscle] = useState(musclesData[0].muscle);

  const pickMuscleFromDropDown = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMuscle(e.target.value);
  };

  useEffect(() => {
    console.log('selected muscle:', selectedMuscle);
  }, [selectedMuscle]);

  const excersisesValues = {
    muscles: muscles,
    pickMuscleFromDropDown: pickMuscleFromDropDown,
  };

  return <ExcersisesContext.Provider value={excersisesValues}>{children}</ExcersisesContext.Provider>;
};

export default ExcersisesContext;
