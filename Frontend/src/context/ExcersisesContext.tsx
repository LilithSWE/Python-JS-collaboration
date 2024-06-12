import { ChangeEvent, createContext, ReactNode, useEffect, useState } from 'react';
import { IMuscle, IExcersiseObject, ITrainingData } from '../assets/utils/types/types';
import { musclesData, excersisesData } from '../data/excersisesData';
import data from '../data/excersises.json';

// Should probably refactor this later as a helperfunction to avoid the repeat

interface IExcersisesContextProps {
  types: IExcersiseObject[];
  muscles: IMuscle[];
  selectedType: string;
  excercises: ITrainingData[];
  pickMuscleFromDropDown: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleClickOnType: (type: string) => void;
}

interface IContextProps {
  children: ReactNode;
}

const ExcersisesContext = createContext<IExcersisesContextProps | undefined>(undefined);

export const ExcersisesContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [muscles, setMuscles] = useState<IMuscle[]>(musclesData);
  const [selectedMuscle, setSelectedMuscle] = useState(musclesData[0].muscle.toLowerCase());
  const [types, setTypes] = useState<IExcersiseObject[]>(excersisesData);
  const [selectedType, setSelectedType] = useState(excersisesData[0].excercise.toLowerCase());
  const [excercises, setExcercises] = useState<ITrainingData[]>(data);

  const pickMuscleFromDropDown = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMuscle(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredExcercises = data.filter(excercise => {
      const bySelectedMuscle = selectedMuscle === 'all' || excercise.muscle.toLowerCase().includes(selectedMuscle);
      const bySelectedType = selectedType === 'all' || excercise.type.toLowerCase().includes(selectedType);
      return bySelectedMuscle && bySelectedType;
    });

    setExcercises(filteredExcercises);
  }, [selectedType, selectedMuscle]);

  const handleClickOnType = (type: string) => {
    setSelectedType(type.toLowerCase());
  };

  const excersisesValues = {
    muscles: muscles,
    types: types,
    selectedType: selectedType,
    excercises: excercises,
    pickMuscleFromDropDown: pickMuscleFromDropDown,
    handleClickOnType: handleClickOnType,
  };

  return <ExcersisesContext.Provider value={excersisesValues}>{children}</ExcersisesContext.Provider>;
};

export default ExcersisesContext;
