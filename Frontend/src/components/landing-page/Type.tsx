import React from 'react';
import useExcersise from '../../assets/custom-hooks/useExcersise';
import { getTextWithFirstLetterUpperCase } from '../../assets/utils/helperfunctions/helperfunctions';

interface ITypeProps {
  title: string;
}

const Type: React.FC<ITypeProps> = ({ title }) => {
  const { selectedType, handleClickOnType } = useExcersise();
  return (
    <button
      onClick={() => handleClickOnType(title)}
      className={`${
        selectedType === title.toLowerCase() ? 'bg-orangeColor' : 'bg-lightblueColor'
      } py-2 px-4 rounded-md`}
    >
      {getTextWithFirstLetterUpperCase(title).replace('_', ' ')}
    </button>
  );
};

export default Type;
