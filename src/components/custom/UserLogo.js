import { IsAuth } from '../../utils/Auth';
import { Link, useNavigate } from 'react-router-dom';

const UserLogo = () => {
  const clickHandler = () => {
    console.log('clicked');
  };
  const logoutHandler = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };
  return (
    <div className="d-flex">
      <div className="rounded-circle bg-secondary-color px-3 py-2">
        {IsAuth() ? IsAuth().name.charAt(0).toUpperCase() : ''}
      </div>

      <div className="mt-1 ms-2">
        <button
          type="button"
          className="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={clickHandler}
        ></button>
        <ul className="dropdown-menu">
          <li>
            <Link to="/" className="dropdown-item" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserLogo;
