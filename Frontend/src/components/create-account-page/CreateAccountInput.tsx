import { ICreateInputs } from '../../assets/utils/types/types';
import useCreateAccount from '../../assets/custom-hooks/useCreateAccount';
import { getTextWithFirstLetterUpperCase, getSeperatedText } from '../../assets/utils/helperfunctions/helperfunctions';

interface ICreateTextInputProps {
  type: keyof ICreateInputs;
  text: string;
  placeholder?: string;
}
const CreateAccountInput: React.FC<ICreateTextInputProps> = ({ type, text, placeholder }) => {
  const { createInputs, setInputOnChange } = useCreateAccount();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={text} className="text-lg">
        {getTextWithFirstLetterUpperCase(getSeperatedText(text, 'name'))}
      </label>
      <input
        onChange={e => setInputOnChange(e, type)}
        type={type === 'password' ? 'password' : 'text'}
        name={text}
        placeholder={placeholder}
        className="input"
        value={createInputs[type]}
      />
    </div>
  );
};

export default CreateAccountInput;
