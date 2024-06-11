import { createContext, ReactNode, useState, FormEvent, useEffect } from 'react';
import { ICreateInputs } from '../assets/utils/types/types';

const CreateAccountContext = createContext<ICreateAccountProps | undefined>(undefined);

interface ICreateAccountProps {
  createInputs: ICreateInputs;
  setInputOnChange: (e: FormEvent<HTMLInputElement>, key: keyof ICreateInputs) => void;
}

interface IContextProps {
  children: ReactNode;
}

export const CreateAccountContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [createInputs, setCreateInputs] = useState({ firstname: '', lastname: '', email: '', password: '' });

  useEffect(() => {
    console.log('inputs:', createInputs);
  }, [createInputs]);

  const setInputOnChange = (e: FormEvent<HTMLInputElement>, key: keyof ICreateInputs) => {
    const target = e.target as HTMLInputElement;
    setCreateInputs(prev => {
      return { ...prev, [key]: target.value };
    });
  };

  const createAccountValues = {
    createInputs: createInputs,
    setInputOnChange: setInputOnChange,
  };

  return <CreateAccountContext.Provider value={createAccountValues}>{children}</CreateAccountContext.Provider>;
};

export default CreateAccountContext;
