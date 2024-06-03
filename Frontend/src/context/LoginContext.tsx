import { createContext, ReactNode } from 'react';

const LoginContext = createContext<ILoginProps | undefined>(undefined);

interface ILoginProps {}

interface IContextProps {
  children: ReactNode;
}

export const LoginContextProvider: React.FC<IContextProps> = ({ children }) => {
  const loginValues = {};

  return (
    <LoginContext.Provider value={loginValues}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
