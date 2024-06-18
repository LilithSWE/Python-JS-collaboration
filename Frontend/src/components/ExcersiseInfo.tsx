import { getTextWithFirstLetterUpperCase } from '../assets/utils/helperfunctions/helperfunctions';

interface IExcersiseInfoProps {
  category: string;
  text: string;
}

const ExcersiseInfo: React.FC<IExcersiseInfoProps> = ({ category, text }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-bold">{getTextWithFirstLetterUpperCase(category)}</p>
      <p>{getTextWithFirstLetterUpperCase(text).replace('_', ' ')}</p>
    </div>
  );
};

export default ExcersiseInfo;
