import Signup from './pages/Signup';
import Login from './pages/Login';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/register" component={Signup} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App;
