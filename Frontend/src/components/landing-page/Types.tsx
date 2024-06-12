import Type from './Type';
import useExcersise from '../../assets/custom-hooks/useExcersise';

const Types = () => {
  const { types } = useExcersise();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-10">
        {types.map(type => {
          return <Type key={type.id} title={type.excercise} />;
        })}
      </div>
    </div>
  );
};

export default Types;
