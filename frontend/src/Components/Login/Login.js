import React, { useState, useContext } from "react";
import Axios from "axios";
import "./Login.css";
import {withRouter,Link} from 'react-router-dom';
import { AuthDispatchContext, UserDispatchContext } from '../../Contexts/context';

function Login(props) {

  const { setA } = useContext(AuthDispatchContext);
  const { setU } = useContext(UserDispatchContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://backend-tastyfy.onrender.com/user/login";

  const handleemail = (e) => {
    setEmail(e.target.value);
  }
  const handlepassword = (e) => {
    setPassword(e.target.value);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      email: email,
      password: password
    })
      .then(res => {
        if (res.data.ok === true) {
          localStorage.setItem('auth-token', res.data.data.token);
          Axios
            .get(`https://backend-tastyfy.onrender.com/user/detail`, {
              headers: {
                'auth-token': res.data.data.token
              }
            })
            .then(({ data }) => {
              if (data.ok === true) {
                setU(data.data);
                setA(true);
              }
            })
            .catch(err => {
              alert(err);
            })
          props.history.push('/');
        }
        else {
          alert(res.data.err.msg);
        }
      })
      .catch(res => { alert(res) })
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="text" name="email" onChange={handleemail} placeholder="example@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <p style={{fontSize:"13px"}}>password must be atleast 8 characters long</p>
            <input type="password" name="password" onChange={handlepassword} placeholder="Password *" />
          </div>
          <Link className="forget" to="/ForgetPassword">forget password?</Link>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={(e) => handlesubmit(e)}>
          Login
        </button>
      </div>
    </div>
  );
}

export default withRouter(Login);