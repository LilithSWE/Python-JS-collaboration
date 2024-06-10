import LogoutButton from './LogoutButton';
import Muscle from './Muscle';
import { useContext } from 'react';
import ExcersisesContext from '../../context/ExcersisesContext';

const Main = () => {
  const context = useContext(ExcersisesContext);

  if (!context) return;

  const { muscles, pickMuscleFromDropDown } = context;

  return (
    <main className="h-full bg-[#f2fcfc]">
      <h2 className="font-sans text-2xl">Let's excercise!</h2>
      <div className="flex items-center gap-4">
        <p>Pick Muscles</p>
        <select onChange={e => pickMuscleFromDropDown(e)} className="w-[125px]">
          {muscles.map(muscle => {
            return <Muscle key={muscle.id} option={muscle.muscle} />;
          })}
        </select>
      </div>

      <div className="font-sans h-96">This is just an empty div for now...</div>
      <LogoutButton />
    </main>
  );
};

export default Main;
