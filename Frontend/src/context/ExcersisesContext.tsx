import { ChangeEvent, createContext, ReactNode, useEffect, useState } from 'react';
import { IMuscle, IExcersise } from '../utils/types/types';
import { musclesData, excersisesData } from '../data/excersisesData';

// Should probably refactor this later as a helperfunction to avoid the repeat

interface IExcersisesContextProps {
  types: IExcersise[];
  muscles: IMuscle[];
  pickMuscleFromDropDown: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface IContextProps {
  children: ReactNode;
}

const ExcersisesContext = createContext<IExcersisesContextProps | undefined>(undefined);

export const ExcersisesContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [muscles, setMuscles] = useState<IMuscle[]>(musclesData);
  const [selectedMuscle, setSelectedMuscle] = useState(musclesData[0].muscle);
  const [types, setTypes] = useState<IExcersise[]>(excersisesData);
  const [selectedType, setSelectedType] = useState(excersisesData[0].excersise);

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
