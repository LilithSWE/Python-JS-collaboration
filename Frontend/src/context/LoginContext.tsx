import { createContext, ReactNode, useState, FormEvent } from 'react';

const LoginContext = createContext<ILoginProps | undefined>(undefined);

interface ILoginProps {
  pageActive: IActivePage;
  passwordInput: string;
  userInput: string;
  handleChangeOnUserInput: (e: FormEvent<HTMLInputElement>) => void;
  handleChangeOnPasswordInput: (e: FormEvent<HTMLInputElement>) => void;
  changeActivePage: (key: keyof IActivePage) => void;
  submitLoginForm: (e: FormEvent) => void;
}

interface IContextProps {
  children: ReactNode;
}

interface IActivePage {
  login: boolean;
  landing: boolean;
}

export const LoginContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [pageActive, setPageActive] = useState({ login: true, landing: false });
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const changeActivePage = (key: keyof IActivePage) => {
    setPageActive(prev => {
      const newPageActive = { ...prev };

      Object.keys(newPageActive).forEach(pageKey => {
        newPageActive[pageKey as keyof IActivePage] = pageKey === key ? true : false;
      });

      return newPageActive;
    });
  };

  const submitLoginForm = (e: FormEvent) => {
    e.preventDefault();
    changeActivePage('landing');
  };

  const handleChangeOnUserInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserInput(target.value);
  };

  const handleChangeOnPasswordInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setPasswordInput(target.value);
  };

  const loginValues = {
    pageActive: pageActive,
    passwordInput: passwordInput,
    userInput: userInput,
    handleChangeOnUserInput: handleChangeOnUserInput,
    handleChangeOnPasswordInput: handleChangeOnPasswordInput,
    changeActivePage: changeActivePage,
    submitLoginForm: submitLoginForm,
  };

  return <LoginContext.Provider value={loginValues}>{children}</LoginContext.Provider>;
};

export default LoginContext;
