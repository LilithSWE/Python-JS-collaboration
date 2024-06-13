import LoginContext from '../context/LoginContext';
import { ReactNode } from 'react';

export const mockedLoginContextValues = {
  pageActive: {
    login: false,
    landing: false,
    create: false,
  },
  passwordInput: 'password',
  userInput: 'input',
  handleChangeOnUserInput: vi.fn(),
  handleChangeOnPasswordInput: vi.fn(),
  changeActivePage: vi.fn(),
  submitLoginForm: vi.fn(),
};

export const MockedLoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <LoginContext.Provider value={mockedLoginContextValues}>{children}</LoginContext.Provider>;
};
