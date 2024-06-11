import { ICreateInputs } from '../../assets/utils/types/types';
import CreateAccountInput from './CreateAccountInput';
import GoBackButton from './GoBackButton';

const CreateAccount = () => {
  const inputs = [
    { id: 1, type: 'firstname', text: 'firstname', placeholder: 'first name' },
    { id: 2, type: 'lastname', text: 'lastname', placeholder: 'last name' },
    { id: 3, type: 'email', text: 'email', placeholder: 'john_doe@mail.com' },
    { id: 4, type: 'password', text: 'password', placeholder: 'password' },
  ];

  return (
    <section className="flex flex-col items-center gap-10 mt-60">
      <h2 className="uppercase text-3xl w-[300px] text-center">Create Account</h2>
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
        <button className="primary-button">Create</button>
      </form>
      <GoBackButton />
    </section>
  );
};

export default CreateAccount;
