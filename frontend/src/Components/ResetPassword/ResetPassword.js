
// Update the Code

import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./ResetPassword.css";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      authtoken: "",
      otp: "",
      newpassword:"",
      url : "https://backend-tastyfy.onrender.com/user/forgetpassword",
      url2 : "https://backend-tastyfy.onrender.com/user/resetpassword"
    }
  }
  handle = (event) => {
    let id = event.target.name;
    let val = event.target.value;
    console.log(id + " " + val);
    this.setState({[id]:val});
  }
  mysubmit1 = (event) => {
    event.preventDefault();
    Axios.post(this.state.url,{
      email : this.state.email
    })
    .then(res => {
      if(res.data.ok === true)
      {
        alert("OTP sent successfully");
        this.setState({authtoken : res.data.data.token});
        console.log(this.state.authtoken);
      }
      else
      {
        console.log(res.data);  
        alert(res.data.err.msg);
      }
    })
    .catch(res => { alert(res) })
  }
  mysubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email + " " + this.state.otp + " " + this.state.newpassword);
    Axios.post(this.state.url2,{
        email : this.state.email,
        OTP : this.state.otp,
        password : this.state.newpassword
    })
    .then(res => {
      console.log(this.state.email + " " + this.state.otp + " " + this.state.newpassword);
      if(res.data.ok === true)
      {
        alert("Password Reset Successful");
      }
      else
      {
        console.log(res.data);  
        alert(res.data.err.msg);
      }
    })
    .catch(res => { alert(res) })
  }
  render(){
    return (
      <div className="base-container">
          <div className="content">
            <div className="formm">
            <div className="header">Forgot Password</div>
              <div className="form-groupp">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={this.handle} placeholder="email" />
              </div>
              <div className="footer">
            <button type="button" className="btn" onClick={(e)=>this.mysubmit1(e)}>
              Get otp
            </button>
            <div className="form-groupp">
                <label htmlFor="email">OTP</label>
                <input type="text" name="otp" onChange={this.handle} placeholder="otp" />
              </div>
              <div className="form-groupp">
                <label htmlFor="password">New Password</label>
                <input type="password" name="newpassword" onChange={this.handle} placeholder="password" />
              </div>
              <button type="button" className="btn" onClick={(e)=>this.mysubmit(e)}>
              Reset
            </button>
          </div>
            </div>
            
          </div>
          
        </div>
    );
  }

}


export default ResetPassword;