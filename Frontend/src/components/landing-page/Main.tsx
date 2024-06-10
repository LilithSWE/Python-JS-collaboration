import Types from './Types';
import LogoutButton from './LogoutButton';

const Main = () => {
  return (
    <main className="h-full bg-[#f2fcfc] flex flex-col gap-4">
      <h2 className="font-sans text-2xl">Let's excercise!</h2>
      <div className="font-sans h-96">
        <Types />
        <LogoutButton />
      </div>
    </main>
  );
};

export default Main;
