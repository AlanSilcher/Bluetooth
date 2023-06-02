import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/actions'; 
/* import { requestDevice } from 'web-bluetooth'; */


export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const log = useSelector(state => state.logIn);

  const handleSignInClick = () => {
    navigate("/signin");
  };

  const handleLogInClick = () => {
    navigate("/login");
  };

  const handleLogOutClick = async () => {
    dispatch(logOutUser()); 
    await navigate("/")
  };

  const isOnLogin = location.pathname === "/login";
  const isOnSignIn = location.pathname === "/signin";

  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        {!log && !isOnSignIn && (
          <button className="btn btn-outline-success me-2" type="button" onClick={handleSignInClick}>
            Sign In
          </button>
        )}
        {!log && !isOnLogin && (
          <button className="btn btn-outline-success me-2" type="button" onClick={handleLogInClick}>
            Log In
          </button>
        )}
        {log && (
          <button className="btn btn-outline-danger me-2" type="button" onClick={handleLogOutClick}>
            Log Out
          </button>
        )}
      </form>
    </nav>
  );
}

