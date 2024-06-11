import { useContext } from 'react';
import CreateAccountContext from '../../context/CreateAccountContext';

const useCreateAccount = () => {
  const context = useContext(CreateAccountContext);

  if (!context) {
    throw new Error('context does not exist in create account provider');
  }

  return context;
};

export default useCreateAccount;
