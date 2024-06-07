import LandingPage from './components/landing-page/LandingPage';
import Login from './components/login-page/Login';
import useLogin from './assets/custom-hooks/useLogin';

function App() {
  const { pageActive } = useLogin();

  return (
    <>
      {pageActive.login && <Login />}
      {pageActive.landing && <LandingPage />}
    </>
  );
}

export default App;
