import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LoginContextProvider } from './context/LoginContext.tsx';
import { ExcersisesContextProvider } from './context/ExcersisesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ExcersisesContextProvider>
    <LoginContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LoginContextProvider>
  </ExcersisesContextProvider>
);
