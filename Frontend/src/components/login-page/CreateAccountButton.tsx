import useLogin from '../../assets/custom-hooks/useLogin';

const CreateAccountButton = () => {
  const { changeActivePage } = useLogin();
  return (
    <button className="hover:text-orangeColor" onClick={() => changeActivePage('create')}>
      Create Account
    </button>
  );
};

export default CreateAccountButton;
