import useLogin from '../../assets/custom-hooks/useLogin';
const GoBackButton = () => {
  const { changeActivePage } = useLogin();

  return (
    <button className="hover:text-orangeColor" onClick={() => changeActivePage('login')}>
      Go Back
    </button>
  );
};

export default GoBackButton;
