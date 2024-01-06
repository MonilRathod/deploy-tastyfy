import React, { useContext } from 'react';
import { useHistory, Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import { RiFileSearchLine } from 'react-icons/ri'
import { AuthContext, UserContext, AuthDispatchContext, UserDispatchContext } from '../../Contexts/context';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IoLogOutOutline, IoInformationCircleOutline, IoLockClosedOutline } from "react-icons/io5"
import {IoIosLogIn} from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import {TiDocumentText} from "react-icons/ti"


function Navbar() {

  const { isAuth } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const { setU } = useContext(UserDispatchContext);
  const { setA } = useContext(AuthDispatchContext);

  const history = useHistory();

  const signUp = () => {
    history.push("/LoginSignup")
  }

  const handlelogout = () => {
    console.log("logout");
    localStorage.removeItem('auth-token');
    setA(false);
    setU({});
  }

  const JoinNow = () => {
    return (
      <div className="join-btn" onClick={signUp}>
         <IoIosLogIn size={21} /> Join Now
      </div>
    );
  }
  const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <div className="Profile-Button" onClick={handleClick}>

          <div className="Name">
            {user.user.name}
          </div>
          <img className="Profile-Pic" src="https://lh3.googleusercontent.com/ogw/ADGmqu_zu--WffN4JlWGzZ0pulY4v67ZMm7FTfhJIYJhiTA=s64-c-mo"></img>
        </div>

        <Menu
          style={{ "border-radius": "13" }}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => { history.push("/Dashboard") }} className="Menu-item"><CgProfile size={21} />Dashboard</MenuItem>
          <MenuItem onClick={() => { history.push("/PrivacyPolicy") }} className="Menu-item"><IoLockClosedOutline size={21} />Privacy Policy</MenuItem>
          <MenuItem onClick={() => { history.push("/About") }} className="Menu-item"><IoInformationCircleOutline size={21} />About us</MenuItem>
          <MenuItem onClick={() => { history.push("/Guide") }} className="Menu-item"><TiDocumentText size={21} />User Guide</MenuItem>
          <MenuItem onClick={handlelogout} className="Menu-item" style={{ "background-color": "red", "color": "white" }}>Logout <IoLogOutOutline size={20} /></MenuItem>
        </Menu>
      </>

    );
  }

  return (
    <nav className='Navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'> Tastefy</Link>
        <div className="Nav-Right-parent">
          <div className="Nav-Right">
            <div className="Filters" onClick={() => history.push("/SearchPage")}>
              <RiFileSearchLine /> Search Page
            </div>
            {isAuth &&
              <Link className="upload-btn" to='/Upload'>
                &#8593;Upload
              </Link>
            }
            {isAuth === true ?
              <Profile /> :
              <JoinNow />
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;