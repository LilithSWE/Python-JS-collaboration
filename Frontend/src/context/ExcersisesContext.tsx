import { createContext, ReactNode } from 'react';

const ExcersisesContext = createContext<IExcersisesProps | undefined>(
  undefined
);

interface IExcersisesProps {}

interface IContextProps {
  children: ReactNode;
}

export const ExcersisesContextProvider: React.FC<IContextProps> = ({
  children,
}) => {
  const excersisesValues = {};

  return (
    <ExcersisesContext.Provider value={excersisesValues}>
      {children}
    </ExcersisesContext.Provider>
  );
};

export default ExcersisesContext;
