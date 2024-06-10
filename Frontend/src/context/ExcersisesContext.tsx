import { ChangeEvent, createContext, ReactNode, useEffect, useState } from 'react';
import { IMuscle, IExcersise } from '../utils/types/types';
import { musclesData, excersisesData } from '../data/excersisesData';

// Should probably refactor this later as a helperfunction to avoid the repeat

interface IExcersisesContextProps {
  types: IExcersise[];
  muscles: IMuscle[];
  selectedType: string;
  pickMuscleFromDropDown: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleClickOnType: (type: string) => void;
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

  const handleClickOnType = (type: string) => {
    setSelectedType(type);
  };

  const excersisesValues = {
    muscles: muscles,
    types: types,
    selectedType: selectedType,
    pickMuscleFromDropDown: pickMuscleFromDropDown,
    handleClickOnType: handleClickOnType,
  };

  return <ExcersisesContext.Provider value={excersisesValues}>{children}</ExcersisesContext.Provider>;
};

export default ExcersisesContext;
