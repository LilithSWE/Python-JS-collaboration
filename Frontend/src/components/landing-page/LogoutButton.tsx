import useLogin from '../../assets/custom-hooks/useLogin';

const LogoutButton = () => {
  const { changeActivePage } = useLogin();

  return <button onClick={() => changeActivePage('login')}>Logout</button>;
};

export default LogoutButton;
