import { IExcersise } from '../assets/utils/types/types';
import ExcersiseInfo from './ExcersiseInfo';
import { v4 as uuidv4 } from 'uuid';

interface IExcersiseProp {
  excersiseInfo: IExcersise;
}

const Excersise: React.FC<IExcersiseProp> = ({ excersiseInfo }) => {
  const { name, type, muscle, equipment, difficulty, instructions } = excersiseInfo;

  const excerises = [
    {
      category: 'type',
      text: type,
    },
    {
      category: 'muscle',
      text: muscle,
    },
    {
      category: 'equipment',
      text: equipment,
    },
    {
      category: 'difficulty',
      text: difficulty,
    },
  ];

  return (
    <div className="w-[300px] rounded-md pt-2 pb-4 px-2 flex flex-col gap-4 bg-bgExcersise">
      <h2 className="text-2xl text-center">{name}</h2>
      <div className="flex flex-col gap-4">
        {excerises.map(excersise => {
          return <ExcersiseInfo key={uuidv4()} category={excersise.category} text={excersise.text} />;
        })}
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Instructions</p>
        <p>{instructions}</p>
      </div>
    </div>
  );
};

export default Excersise;
