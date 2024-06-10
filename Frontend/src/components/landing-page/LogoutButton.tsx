import useLogin from '../../assets/custom-hooks/useLogin';

const LogoutButton = () => {
  const { changeActivePage } = useLogin();

  return (
    <button className="primary-button w-[125px]" onClick={() => changeActivePage('login')}>
      Logout
    </button>
  );
};

export default LogoutButton;
