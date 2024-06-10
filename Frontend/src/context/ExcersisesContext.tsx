import { createContext, ReactNode, useState } from 'react';
import data from '../data/excersises.json';
import { getTextWithFirstLetterUpperCase } from '../assets/utils/helperfunctions/helperfunctions';

const ExcersisesContext = createContext<IExcersisesContextProps | undefined>(undefined);

interface IExcersisesProps {
  id: number;
  excersise: string;
}

interface IExcersisesContextProps {
  types: IExcersisesProps[];
}

interface IContextProps {
  children: ReactNode;
}

const excersises = data
  .map((excersise, index) => ({
    id: index + 1,
    excersise: getTextWithFirstLetterUpperCase(excersise.type.replace('_', ' ')),
  }))
  .filter((type, index, types) => {
    return index === types.findIndex(t => t.excersise === type.excersise);
  });

export const ExcersisesContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [types, setTypes] = useState<IExcersisesProps[]>(excersises);

  const excersisesValues = {
    types: types,
  };

  return <ExcersisesContext.Provider value={excersisesValues}>{children}</ExcersisesContext.Provider>;
};

export default ExcersisesContext;
