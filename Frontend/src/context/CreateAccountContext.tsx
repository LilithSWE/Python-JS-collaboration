import { createContext, ReactNode, useState, FormEvent, useEffect } from 'react';
import { ICreateInputs } from '../assets/utils/types/types';
import axios from 'axios';

const CreateAccountContext = createContext<ICreateAccountProps | undefined>(undefined);

interface ICreateAccountProps {
  createInputs: ICreateInputs;
  setInputOnChange: (e: FormEvent<HTMLInputElement>, key: keyof ICreateInputs) => void;
  handleSubmit: (formData: ICreateInputs) => Promise<void>;
  error: string | null;
  loading: boolean;
}

interface IContextProps {
  children: ReactNode;
}

export const CreateAccountContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [createInputs, setCreateInputs] = useState({ firstname: '', lastname: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log('inputs:', createInputs);
  }, [createInputs]);

  const setInputOnChange = (e: FormEvent<HTMLInputElement>, key: keyof ICreateInputs) => {
    const target = e.target as HTMLInputElement;
    setCreateInputs(prev => {
      return { ...prev, [key]: target.value };
    });
  };

  const handleSubmit = async () => { 
    setLoading(true); 

    try {
      const response = await axios.post('http://XXX/user/add', FormDataEvent, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 201) {
        console.log('Account created!', response.data);
        alert("You are now a member and ready to log in! Yay! :)");
      } else if (response.status === 409) {
        setError('User already exists with this email.');
      } else {
        throw new Error(`Server returned status: ${response.status}`);
      }
  
      } catch (error) {
        console.error('Something went wrong:', error);
        alert("Something went terribly wrong... :(");
        setError('Failed to create account. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

  /* const createAccountValues = {
    createInputs: createInputs,
    setInputOnChange: setInputOnChange,
  }; */

  const contextValues: ICreateAccountProps = {
    createInputs,
    setInputOnChange,
    handleSubmit,
    error,
    loading,
  };

  return <CreateAccountContext.Provider value={contextValues}>{children}</CreateAccountContext.Provider>;
};


export default CreateAccountContext;
