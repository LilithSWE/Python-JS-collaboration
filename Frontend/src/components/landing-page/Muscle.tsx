import { getTextWithFirstLetterUpperCase } from '../../assets/utils/helperfunctions/helperfunctions';

interface IMuscleProps {
  option: string;
}

const Muscle: React.FC<IMuscleProps> = ({ option }) => {
  return <option value={option}>{getTextWithFirstLetterUpperCase(option).replace('_', ' ')}</option>;
};

export default Muscle;
