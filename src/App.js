import Signup from './pages/Signup';
import Login from './pages/Login';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
function App() {
  return (
    <>
      <Header />
      <Main>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Login} />
      </Main>
    </>
  );
}

export default App;
