import LandingPage from './components/landing-page/LandingPage';
import Login from './components/login-page/Login';
import useLogin from './assets/custom-hooks/useLogin';
import CreateAccount from './components/create-account-page/CreateAccount';

function App() {
  const { pageActive } = useLogin();

  return (
    <>
      {pageActive.login && <Login />}
      {pageActive.landing && <LandingPage />}
      {pageActive.create && <CreateAccount />}
    </>
  );
}

export default App;
