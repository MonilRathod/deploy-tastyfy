import React from "react";
import "./LoginSignup.css";
import Login from "../Components/Login/Login"
import Register from "../Components/Login/Register"
import loginImg from "../Components/Login/login.jpg";
import {Link} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5'

class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
 
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
       
        <div>
        <Link to='/' className='navbar-logo' ><IoArrowBack size={30} style={{marginLeft:"30px"}}/> Tastefy </Link>
              <img src={loginImg} class="login_img"/>
        </div>
        <div className="login">
          <div className="containerr" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login history={this.props.history} containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register history={this.props.history} containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginSignup;
