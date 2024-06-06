import React from 'react';

interface ITypeProps {
  title: string;
}

const Type: React.FC<ITypeProps> = ({ title }) => {
  return <button className="bg-lightblueColor py-2 px-4 rounded-md">{title}</button>;
};

export default Type;
