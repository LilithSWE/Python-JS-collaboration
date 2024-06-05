import useLogin from '../../assets/custom-hooks/useLogin';

const LoginButton = () => {
  const { submitLoginForm } = useLogin();

  return (
    <button className="primary-button w-[120px] uppercase" onClick={submitLoginForm}>
      Login
    </button>
  );
};

export default LoginButton;
