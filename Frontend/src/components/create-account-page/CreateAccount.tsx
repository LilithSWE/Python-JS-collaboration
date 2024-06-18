import { useState } from 'react';
import { ICreateInputs } from '../../assets/utils/types/types';
import CreateAccountInput from './CreateAccountInput';
import GoBackButton from './GoBackButton';

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const inputs = [
    { id: 1, type: 'firstname', text: 'firstname', placeholder: 'first name' },
    { id: 2, type: 'lastname', text: 'lastname', placeholder: 'last name' },
    { id: 3, type: 'email', text: 'email', placeholder: 'john_doe@mail.com' },
    { id: 4, type: 'password', text: 'password', placeholder: 'password' },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);    

    inputs.forEach(input => {
      const value = (document.getElementById(input.type) as HTMLInputElement)?.value ?? '';
      setFormData(prevData => ({ ...prevData, [input.type]: value }));
    });

    try {
      const response = await fetch('http://XXX/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 201) {
        const data = await response.json();
        console.log('Account created!', data);
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

  return (
    <section className="flex flex-col items-center gap-10 mt-60">
      <h2 className="uppercase text-3xl w-[300px] text-center">Create Account</h2>
      <div className="w-full max-w-[400px] flex flex-col gap-4 items-center">
      <form className="w-full max-w-[400px] flex flex-col gap-4 items-center">
        {inputs.map(input => {
          const { text, type, placeholder } = input;
          return (
            <CreateAccountInput
              key={input.id}
              text={text}
              type={type as keyof ICreateInputs}
              placeholder={placeholder}
            />
          );
        })}
          <button className="primary-button" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
      <GoBackButton />
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
};

export default CreateAccount;
