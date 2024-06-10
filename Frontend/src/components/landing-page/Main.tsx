import Types from './Types';
import LogoutButton from './LogoutButton';
import Muscle from './Muscle';
import useExcersise from '../../assets/custom-hooks/useExcersise';

const Main = () => {
  const { muscles, pickMuscleFromDropDown } = useExcersise();

  return (
    <main className="h-full bg-[#f2fcfc] flex flex-col gap-4">
      <h2 className="font-sans text-2xl">Let's excercise!</h2>

      <div className="flex items-center gap-4">
        <p>Pick Muscles</p>
        <select onChange={e => pickMuscleFromDropDown(e)} className="w-[125px]">
          {muscles.map(muscle => {
            return <Muscle key={muscle.id} option={muscle.muscle} />;
          })}
        </select>
      </div>
      <div className="font-sans h-96">
        <Types />
        <LogoutButton />
      </div>
    </main>
  );
};

export default Main;
