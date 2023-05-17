import useAuth from 'hooks/useAuth';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Login from '../views/Login';
import Panel from '../views/Panel';

const AuthCheck = ({ authenticate }: { authenticate: boolean }) => {
  return authenticate ? <Outlet /> : <Navigate to='/' />;
};

const Home = ({ authenticate }: { authenticate: boolean }) => {
  return authenticate ? <Navigate to='/user' /> : <Outlet />;
};
const RouterWrapper = () => {
  const [authenticate] = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home authenticate={authenticate} />}>
          <Route path='/' element={<Login />} />
        </Route>
        <Route element={<AuthCheck authenticate={authenticate} />}>
          <Route path='/panel' element={<Panel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterWrapper;
