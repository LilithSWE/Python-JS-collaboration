import React from 'react';
import useExcersise from '../../assets/custom-hooks/useExcersise';

interface ITypeProps {
  title: string;
}

const Type: React.FC<ITypeProps> = ({ title }) => {
  const { selectedType, handleClickOnType } = useExcersise();
  return (
    <button
      onClick={() => handleClickOnType(title)}
      className={`${selectedType === title ? 'bg-orangeColor' : 'bg-lightblueColor'} py-2 px-4 rounded-md`}
    >
      {title}
    </button>
  );
};

export default Type;
