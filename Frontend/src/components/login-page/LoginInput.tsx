import React from 'react';
import { getTextWithFirstLetterUpperCase } from '../../assets/utils/helperfunctions/helperfunctions';

interface ITextInputProps {
  text: string;
  value: string;
  changeInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<ITextInputProps> = ({ text, value, changeInput }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-lg" htmlFor={text}>
        {getTextWithFirstLetterUpperCase(text)}
      </label>
      <input
        onChange={changeInput}
        type={text === 'password' ? 'password' : 'text'}
        name={text}
        placeholder={text}
        className="input"
        value={value}
      />
    </div>
  );
};

export default LoginInput;
