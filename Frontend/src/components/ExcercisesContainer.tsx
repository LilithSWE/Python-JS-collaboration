import useExcersise from '../assets/custom-hooks/useExcersise';
import Excersise from './Excersise';

const ExcercisesContainer = () => {
  const { excercises } = useExcersise();

  return (
    <div className="w-full flex flex-wrap gap-10 justify-center">
      {excercises.map((excercise, index) => {
        return <Excersise key={index} excersiseInfo={excercise} />;
      })}
    </div>
  );
};

export default ExcercisesContainer;
