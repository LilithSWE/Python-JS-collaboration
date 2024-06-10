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

interface IExcersisesProps {
  id: number;
  excersise: string;
}

interface IExcersisesContextProps {
  types: IExcersisesProps[];
  muscles: IMuscle[];
  pickMuscleFromDropDown: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface IContextProps {
  children: ReactNode;
}

const ExcersisesContext = createContext<IExcersisesContextProps | undefined>(undefined);

const excersises = data
  .map((excersise, index) => ({
    id: index + 1,
    excersise: getTextWithFirstLetterUpperCase(excersise.type.replace('_', ' ')),
  }))
  .filter((type, index, types) => {
    return index === types.findIndex(t => t.excersise === type.excersise);
  });

export const ExcersisesContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [muscles, setMuscles] = useState<IMuscle[]>(musclesData);
  const [selectedMuscle, setSelectedMuscle] = useState(musclesData[0].muscle);
  const [types, setTypes] = useState<IExcersisesProps[]>(excersises);

  const pickMuscleFromDropDown = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMuscle(e.target.value);
  };

  useEffect(() => {
    console.log('selected muscle:', selectedMuscle);
  }, [selectedMuscle]);

  const excersisesValues = {
    muscles: muscles,
    pickMuscleFromDropDown: pickMuscleFromDropDown,
    types: types,
  };

  return <ExcersisesContext.Provider value={excersisesValues}>{children}</ExcersisesContext.Provider>;
};

export default ExcersisesContext;
