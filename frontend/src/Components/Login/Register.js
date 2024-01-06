
import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";
import loginImg from "./login.jpg";
import {withRouter} from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      email: "",
      password:"",
      url : "https://backend-tastyfy.onrender.com/user/register"
    }
  }
  handle = (event) => {
    let id = event.target.name;
    let val = event.target.value;
    console.log(id + " " + val);
    this.setState({[id]:val});
  }
  mysubmit = (event) => {
    event.preventDefault();
    Axios.post(this.state.url,{
      name : this.state.name,
      email : this.state.email,
      password : this.state.password
    })
    .then(res=>{
      if(res.data.ok === true)
      {
        console.log(res.data);
        alert("Successfully registered");
        this.props.history.push('/LoginSignup');
      }
      else
      {
        alert(res.data.err.msg);
      }
    })
    .catch(res => {  })
  }
 
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          {/* <div className="image">
            <img src={loginImg} />
          </div> */}
          <div className="form">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={this.handle} placeholder="name" />
            </div>
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" onChange={this.handle} placeholder="username" />
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" onChange={this.handle} placeholder="enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" onChange={this.handle}  placeholder="password" />
            </div>
              {/* <label htmlFor="foodChoice1" class="checkbox_label">   
              <input type="checkbox" name="foodChoice1" class="checkbox_label" value="Vegan" /> Are you a Vegan ?
              </label>
              <label htmlFor="foodChoice2"class="checkbox_label">
              <input type="checkbox" name="foodChoice2" class="checkbox_label" value="Vegetarian" />
               Or a Vegetarian ?
              </label> */}
          </div>
        </div>
        <br></br>
        <div className="footer">
          <button type="button" className="btn" onClick={(e)=>this.mysubmit(e)}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);