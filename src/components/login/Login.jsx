import { useState } from 'react';
import { Button } from '../../components';
import axios from 'axios';
import { userRequest } from '../../utils/requestMethods';
import { Navigate } from 'react-router-dom';

const Login = ({ closeModel }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;

  const loginUser = async () => {
    console.log(email, password);
    try {
      const res = await userRequest.post('/auth/login', { email, password });
      console.log(res.data.data);
      const userData = JSON.stringify(res.data.data);
      const token = res.data.data.token;
      localStorage.setItem('user', userData);
      localStorage.setItem('token', token);
      closeModel(false);
    } catch (error) {
      console.log(error);
    }
  };

  const OnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div id="login">
      <div className="formWrap">
        <h4>Login</h4>
        <form>
          <div className="formGroup">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={OnChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={OnChange}
            />
          </div>

          <Button btnText="Login" btnType="mainBtn" onClick={loginUser} />
        </form>
      </div>
    </div>
  );
};

export default Login;
