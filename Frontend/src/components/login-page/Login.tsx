import useLogin from '../../assets/custom-hooks/useLogin';
import LoginButton from './LoginButton';
import TextInput from './TextInput';

const Login = () => {
  const { userInput, passwordInput, handleChangeOnPasswordInput, handleChangeOnUserInput } = useLogin();

  const inputs = [
    { id: 1, text: 'username', value: userInput, changeInput: handleChangeOnUserInput },
    { id: 2, text: 'password', value: passwordInput, changeInput: handleChangeOnPasswordInput },
  ];

  return (
    <>
      <section className="flex flex-col items-center gap-10 mt-60">
        <h2 className="uppercase text-3xl w-[300px] text-center">
          <span className="text-orangeColor">Make </span>
          <span>Your Body </span>
          <span className="text-purpleColor">Healthy & Fit</span>
        </h2>
        <form className="w-full max-w-[400px] flex flex-col gap-4 items-center">
          {inputs.map(input => {
            const { id, text, value, changeInput } = input;
            return <TextInput key={id} text={text} value={value} changeInput={changeInput} />;
          })}
          <LoginButton />
        </form>
      </section>
    </>
  );
};

export default Login;
