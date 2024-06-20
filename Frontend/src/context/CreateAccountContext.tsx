import { createContext, ReactNode, useState, FormEvent, useEffect } from 'react';
import { ICreateInputs } from '../assets/utils/types/types';
import axios from 'axios';

const CreateAccountContext = createContext<ICreateAccountProps | undefined>(undefined);

interface ICreateAccountProps {
  createInputs: ICreateInputs;
  setInputOnChange: (e: FormEvent<HTMLInputElement>, key: keyof ICreateInputs) => void;
  handleSubmit: (formData: ICreateInputs) => Promise<void>;
  error: string;
  loading: boolean;
}

interface IContextProps {
  children: ReactNode;
}

export const CreateAccountContextProvider: React.FC<IContextProps> = ({ children }) => {
  const [createInputs, setCreateInputs] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [error, setError] = useState('');
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
      const response = await axios.post('http://XXX/user/add', {
        body: createInputs,
      });

      const data = response.data;

      if (data.status === 201) {
        console.log('Account created!', data);
        alert('You are now a member and ready to log in! Yay! :)');
      } else if (data.status === 409) {
        setError('User already exists with this email.');
      } else {
        throw new Error(`Server returned status: ${data.status}`);
      }
    } catch (error) {
      console.error('Something went wrong:', error);
      alert('Something went terribly wrong... :(');
      setError('Failed to create account. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const createAccountContextValues = {
    createInputs: createInputs,
    error: error,
    loading: loading,
    setInputOnChange: setInputOnChange,
    handleSubmit: handleSubmit,
  };

  return <CreateAccountContext.Provider value={createAccountContextValues}>{children}</CreateAccountContext.Provider>;
};

export default CreateAccountContext;
