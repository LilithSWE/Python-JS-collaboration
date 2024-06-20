import { MouseEventHandler } from 'react';
import { ICreateInputs } from '../../assets/utils/types/types';
import CreateAccountInput from './CreateAccountInput';
import GoBackButton from './GoBackButton';
import useCreateAccount from '../../assets/custom-hooks/useCreateAccount';
import userFormInputs from '../../models/userFormInputs';

const CreateAccount = () => {
  const { handleSubmit, error, loading, createInputs } = useCreateAccount();

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    await handleSubmit(createInputs);
  };

 const inputs = userFormInputs; 

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
          <button className="primary-button" onClick={handleButtonClick} disabled={loading}>
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
