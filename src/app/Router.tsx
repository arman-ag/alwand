import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Login from '../views/Login';
import Panel from '../views/Panel';
import ErrorBoundary from '../views/errorBoundry';
const AuthCheck = ({ authenticate }: { authenticate: boolean }) => {
  return authenticate ? <Outlet /> : <Navigate to='/' />;
};

const Home = ({ authenticate }: { authenticate: boolean }) => {
  return authenticate ? <Navigate to='/Panel' /> : <Outlet />;
};
const RouterWrapper = () => {
  const authenticate = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          errorElement={<ErrorBoundary />}
          element={<Home authenticate={authenticate} />}
        >
          <Route path='/' element={<Login />} />
        </Route>
        <Route
          errorElement={<ErrorBoundary />}
          element={<AuthCheck authenticate={authenticate} />}
        >
          <Route path='/panel' element={<Panel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterWrapper;
