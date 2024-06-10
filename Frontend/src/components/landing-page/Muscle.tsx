interface IMuscleProps {
  option: string;
}

const Muscle: React.FC<IMuscleProps> = ({ option }) => {
  return <option value={option}>{option}</option>;
};

export default Muscle;
