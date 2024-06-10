import { useContext } from 'react';
import ExcersisesContext from '../../context/ExcersisesContext';

const useExcersise = () => {
  const context = useContext(ExcersisesContext);

  if (!context) {
    throw new Error('context does not exist in excersise provider');
  }

  return context;
};

export default useExcersise;
