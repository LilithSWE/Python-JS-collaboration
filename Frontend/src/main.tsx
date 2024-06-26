import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { LoginContextProvider } from './context/LoginContext.tsx';
import { ExcersisesContextProvider } from './context/ExcersisesContext.tsx';
import { CreateAccountContextProvider } from './context/CreateAccountContext.tsx';
import './styles/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CreateAccountContextProvider>
    <ExcersisesContextProvider>
      <LoginContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </LoginContextProvider>
    </ExcersisesContextProvider>
  </CreateAccountContextProvider>
);
