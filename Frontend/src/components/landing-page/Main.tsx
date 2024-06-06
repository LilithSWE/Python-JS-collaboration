import Types from './Types';

const Main = () => {
  return (
    <main className="h-full bg-[#f2fcfc] flex flex-col gap-4">
      <h2 className="font-sans text-2xl">Let's excercise!</h2>
      <div className="font-sans h-96">
        <Types />
      </div>
    </main>
  );
};

export default Main;
